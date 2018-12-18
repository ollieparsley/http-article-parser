# http-article-parser
A simple http server that will return the main article content from a news/blog web page

## Usage

### Run yourself

Clone this repo, install dependencies and run the server
```
git clone git@github.com:ollieparsley/http-article-parser.git
cd http-article-parser
npm install
npm start
```

### Docker

There is an image on docker hub `ollieparsley/http-article-parser:latest`

## API

When the service is running call the following:
```
curl localhost:3000/v1/article -durl='https://www.motorsport.com/f1/news/leclerc-intimidating-sauber-debut-ferrari/4313895/' -s
{
  "article": {
    "title": "Leclerc found F1 'intimidating' at first",
    "content": "<p>Although the Monegasque driver impressed enough during his rookie campaign for Sauber to earn a seat at Ferrari for 2019, he has confessed to finding the step up to F1 tough to begin with.</p> <p>“At the beginning it’s first of all quite intimidating to speak to so many people,” he explained.</p> <p>”Everything you are going to say is going to be analyzed, not only by your engineer, but by so many people. So obviously it’s quite, not scary, but intimidating as I said. But then you get used to it.</p> <p>“And also the type of feedback you give, you can be a lot more precise with everything you say because there are a lot more people in the background.</p> <p>“In Formula 2, you really try to focus on the main points because obviously there’s only one or two persons maximum that are helping you to get the car better. It’s a different approach [in F1] and it takes a bit of time to get used to it, yes.”</p> <p>Leclerc also says that one of the big adjustment he had to get used to at first was the length of F1 races.</p> <p>“I remember finding the first races extremely long in Formula 1 compared to Formula 2,” he said. “So this is something also that you need to get used to.</p> <p>“After 20 laps you think that the finish is two laps away and then they tell you ‘Okay, 40 laps to go’ and you’re [like] ‘that’s quite long!’ ”</p> <p>Despite the early surprises Leclerc says he has ended the year much wiser about the qualities needed to be successful in F1.</p> <p>“Most of all it comes from just getting used to this paddock, to the things that we need to do around driving that I didn’t expect at the beginning of the year,” he said. “All these things are small details but it makes quite a big difference.</p> <p>“And also just the way you work with so many people. I’ve learned to work with quite a lot more people. Before you are used to speaking only to your engineer and that’s it.</p> <p>\"So yeah, all of these things have changed me quite a bit.”</p>  <p>Charles Leclerc, Sauber and Ruth Buscombe, Sauber Race Strategist walk the track</p> <p>Photo by: Sutton Images</p>",
    "meta": {
      "general": {
        "icons": [
          {
            "href": "/favicon.ico",
            "type": "image/x-icon"
          }
        ],
        "canonical": "https://www.motorsport.com/f1/news/leclerc-intimidating-sauber-debut-ferrari/4313895/",
        "description": "Charles Leclerc has admitted that he found Formula 1 'intimidating' at first as he got used to dealing with more people than he had been used to before.",
        "title": "Leclerc found F1 \"intimidating\" at first"
      },
      "openGraph": {
        "title": "Leclerc found F1 'intimidating' at first",
        "type": "article",
        "url": "https://www.motorsport.com/f1/news/leclerc-intimidating-sauber-debut-ferrari/4313895/",
        "image": {
          "url": "https://cdn-6.motorsport.com/images/amp/YMVEPL16/s6/f1-azerbaijan-gp-2018-charles-.jpg",
          "width": "800",
          "height": "533"
        },
        "description": "Charles Leclerc has admitted that he found Formula 1 'intimidating' at first as he got used to dealing with more people than he had been used to before.",
        "admins": "100001157785488",
        "app_id": "1017388998271288"
      }
    }
```
