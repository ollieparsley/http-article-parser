const express = require('express');
const app = express();
const apiRouter = express.Router();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const url = require("url");
const parse = require('node-readability');
const sanitizeHtml = require('sanitize-html');
const htmlMetadata = require('html-metadata');
const lda = require('lda');
const keywordExtractor = require("keyword-extractor");
const headlineParser = require("eklem-headline-parser");
const pluralize = require('pluralize');
const synonyms = require('synonyms');
const simhashJs = require('simhash-js');
const simhash = new simhashJs.SimHash({
  maxFeatures: 1024,
  kshingles: 16
});

// Set up body parser
app.use(bodyParser.urlencoded({extended:true}));

// All routes prefixed with /api
app.use('/v1', apiRouter);

// API router
apiRouter.post('/article', (req, res) => {
  // req.body
  // Check if url is set
  if (req.body === undefined || req.body.url === undefined) {
    return res.status(400).json({message: 'You need to supply a url'});
  }

  // Check the URL is valid
  let articleUrl = req.body.url;
  let parsedArticleUrl = url.parse(articleUrl);
  if (parsedArticleUrl.hostname === undefined || (parsedArticleUrl.protocol !== 'http:' && parsedArticleUrl.protocol !== 'https:')) {
    return res.status(400).json({message: 'You need to supply a valid url'});
  }

  // Grab the content
  parse(articleUrl, (err, article, meta) => {
    if (err) {
      console.error("Parse error: " + articleUrl + ": " , err);
      res.status(500).json({message: 'Something went wrong parsing the response', exception: err.message});
    }

    // Start formatting the response
    var data = {
      title: {
        text: article.title,
        simhash: simhash.hash(article.title)
      }
    };

    // Metadata
    htmlMetadata.loadFromString(article.html).then(function(metadata){
      try {
        data.meta = metadata;

        // Sanitized content
        data.content = {};
        data.content.text = sanitizeHtml(article.content, {
          allowedTags: [ 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'ul', 'ol',
            'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br' ]
        }).replace(/<\/?[^>]+(>|$)/g, "").replace(/\s+/g,' ').trim();
        data.content.simhash = simhash.hash(data.content.text);

        // Quotes
        quotes = [];
        data.content.text.match(/"([^"]+)"/g).forEach((item, i) => {
          if (i === 0) {
            return;
          }
          if (item.toString().length < 40) {
            return;
          }
          if (item.toString().length > 140) {
            return;
          }
          var text = item.substr(1, item.length -2);
          quotes.push({
            text: text,
            simhash: simhash.hash(text)
          });
        });
        data.quotes = {short:quotes};

        // Run LDA to get terms for 2 topics (5 terms each).
        data.nlp = {};
        var ldaResult = lda([data.content.text], 3, 5);
        data.nlp.lda = ldaResult;

        // Keyword extractor
        data.nlp.keywords = keywordExtractor.extract(data.content.text, {
          language: "english",
          remove_digits: true,
          return_changed_case:true,
          remove_duplicates: true,
          return_chained_words: true,
          remove_max_ngrams: false
        });

        // Find the most relevant keywords in the headline, sorted by number of appearances in the body text
        data.nlp.top_keywords = {
          keywords: []
        };
        var topKeywords = headlineParser.findKeywords(data.title.text + ' ' + data.meta.general.description, data.content.text, 10);
        keywordList = [];
        topKeywords.forEach((topKeyword) => {
          keywordList.push(topKeyword);
          data.nlp.top_keywords.keywords.push({
            text: pluralize.singular(topKeyword),
            synonyms: {
              nouns: synonyms(topKeyword, 'n'),
              verbs: synonyms(topKeyword, 'v')
            }
          });
        });
        data.nlp.top_keywords.simhash_raw = keywordList.sort().join(' ');
        data.nlp.top_keywords.simhash = simhash.hash(data.nlp.top_keywords.simhash_raw);
        console.log("Article fetched: " + articleUrl + ": " , data);
        res.status(200).json({article: data});
        
      } catch(err) {
        console.error("Response error: " + articleUrl + ": " , err);
        res.status(500).json({message: 'Something went wrong creating the response', exception: err.message});
      }
    });

    // Close article to clean up jsdom and prevent leaks
    setTimeout(function(){
      article.close();
    }, 500)
  });
});

// Catch-alls
app.get('*', function(req, res){
  res.json({message: 'Endpoint not found'}, 404);
});
app.post('*', function(req, res){
  res.json({message: 'Endpoint not found'}, 404);
});

// set the server to listen on port
app.listen(port, () => console.log(`Listening on port ${port}`));