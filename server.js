const express = require('express');
const app = express();
const apiRouter = express.Router();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const url = require("url");
const parse = require('node-readability');
const sanitizeHtml = require('sanitize-html');
const htmlMetadata = require('html-metadata');

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
      title: article.title
    };

    // Sanitized content
    data.content = sanitizeHtml(article.content, {
      allowedTags: [ 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'ul', 'ol',
        'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br' ]
    }).trim();

    // Metadata
    htmlMetadata.loadFromString(article.html).then(function(metadata){
      data.meta = metadata;
      console.log("Article fetched: " + articleUrl + ": " , data);
      res.status(200).json({article: data});
    });

    // Close article to clean up jsdom and prevent leaks
    article.close();
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