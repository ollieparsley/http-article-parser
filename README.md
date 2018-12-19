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
curl localhost:3000/v1/article -durl='https://www.motorsport.com/indycar/news/cosworth-indycar-manufacturer-engine-interest/4314712/' -s | jq .
{
  "article": {
    "title": {
      "text": "Cosworth receives manufacturer interest over IndyCar engine ",
      "simhash": 806805890
    },
    "meta": {
      "general": {
        "icons": [
          {
            "href": "/favicon.ico",
            "type": "image/x-icon"
          }
        ],
        "canonical": "http://www.motorsport.com/indycar/news/cosworth-indycar-manufacturer-engine-interest/4314712/",
        "description": "Cosworth has spoken to several manufacturers regarding a potential IndyCar engine programme.",
        "title": "Cosworth receives manufacturer interest over IndyCar engine "
      },
      "openGraph": {
        "title": "Cosworth receives manufacturer interest over IndyCar engine ",
        "type": "article",
        "url": "https://www.motorsport.com/indycar/news/cosworth-indycar-manufacturer-engine-interest/4314712/",
        "image": {
          "url": "https://cdn-9.motorsport.com/images/amp/YNyb9ye2/s6/formula-1-british-gp-2010-a-co-2.jpg",
          "width": "800",
          "height": "533"
        },
        "description": "Cosworth has spoken to several manufacturers regarding a potential IndyCar engine programme.",
        "admins": "100001157785488",
        "app_id": "1017388998271288"
      }
    },
    "content": {
      "text": "The British engineering firm is currently investing heavily in a new American base after signing a long-term contract with the Fiat-Chrysler group as part of its expansion. During a tour of its Northamptonshire base earlier this year, Motorsport.com was told that racing applications in America were on Cosworth's radar. As reported by Motorsport.com earlier this year, Cosworth has made it clear it would build an IndyCar engine if the right partner made an approach. Now Bruce Wood, Cosworth's managing director of powertrains, said that contact has now been made with multiple OEMs. \"We've spoken to two or three [manufacturers] over a period of a couple of years,\" Wood told Motorsport.com. \"There is interest out there, definitely. \"Right now, we're not close to translating it to the real world. \"[IndyCar is] untapped by car companies and I'm surprised more don't think 'OK it's not F1, it's not Le Mans, but the Indy 500 is quite close behind' and you can do it for a fraction. \"We've talked about IndyCar before because that for us always seems to be slightly over looked. Everyone is familiar with the costs of going to F1 and, in recent years, going to Le Mans. Those costs are extraordinary. \"Even the biggest car makers in the world have to think pretty hard about whether they can afford that. \"You can go into IndyCar for a fraction of that because it's a spec Dallara-built car, and the engine regulations are straightforward. There aren't works teams out there. \"For a manufacturer to get into IndyCar it's a lot cheaper and you can win the Indianapolis 500 and [Fernando] Alonso was over there trying to win it last year – it has a huge allure.\" Wood also thinks that IndyCar's new engine rules for 2021 are \"sensible\". \"It's just a small capacity increase,\" he added. \"So Honda and Chevrolet will stay in [IndyCar], as it doesn't require them to put in hundreds of millions of investment. \"Anyone thinking about joining will hopefully continue down that line because you're not throwing the whole thing away and starting again. We think the IndyCar rules are sensible and would love to make an engine, but we need a car manufacturer to do it.\" Cosworth currently supplies IndyCar electronics, such as various steering wheel components and analysis software. Its electronic arm has become a key part of Cosworth's business, which now has deals with organisations such as the United States Navy and road-going projects including the Aston Martin Valkyrie. Aston Martin Valkyrie V12 Cosworth engine Photo by: Motor1 Cosworth recently revealed its 6.5-litre V12 engine that will create a power output of 1,000bhp for the car designed by Adrian Newey. But Wood stressed that he is keen for motorsport to remain part of Cosworth. \"Motorsport will always be a core part of what Cosworth does,\" he said. \"We won't ever get ourselves into a position where it's all we do because it's too high risk of a strategy. But motorsport is key to how we sell our engineering.\"",
      "simhash": 833019650
    },
    "quotes": {
      "short": [
        {
          "text": "There is interest out there, definitely. ",
          "simhash": 3080228576
        },
        {
          "text": "Even the biggest car makers in the world have to think pretty hard about whether they can afford that. ",
          "simhash": 765229312
        },
        {
          "text": "So Honda and Chevrolet will stay in [IndyCar], as it doesn't require them to put in hundreds of millions of investment. ",
          "simhash": 2230821220
        }
      ]
    },
    "nlp": {
      "lda": [
        [
          {
            "term": "engineering",
            "probability": 0.051
          },
          {
            "term": "cosworth's",
            "probability": 0.041
          },
          {
            "term": "indycar",
            "probability": 0.04
          },
          {
            "term": "car",
            "probability": 0.027
          },
          {
            "term": "part",
            "probability": 0.022
          }
        ],
        [
          {
            "term": "cosworth's",
            "probability": 0.053
          },
          {
            "term": "indycar",
            "probability": 0.047
          },
          {
            "term": "year",
            "probability": 0.031
          },
          {
            "term": "car",
            "probability": 0.023
          },
          {
            "term": "part",
            "probability": 0.022
          }
        ],
        [
          {
            "term": "engineering",
            "probability": 0.045
          },
          {
            "term": "indycar",
            "probability": 0.036
          },
          {
            "term": "cosworth's",
            "probability": 0.027
          },
          {
            "term": "wood",
            "probability": 0.023
          },
          {
            "term": "year",
            "probability": 0.02
          }
        ]
      ],
      "keywords": [
        "british engineering firm",
        "investing heavily",
        "american base",
        "signing",
        "long-term contract",
        "fiat-chrysler group",
        "part",
        "expansion",
        "tour",
        "northamptonshire base earlier",
        "year motorsportcom",
        "told",
        "racing applications",
        "america",
        "cosworth's radar",
        "reported",
        "motorsportcom earlier",
        "year cosworth",
        "made",
        "clear",
        "build",
        "indycar engine",
        "partner made",
        "approach",
        "bruce wood cosworth's managing director",
        "powertrains",
        "65-litre v12 engine",
        "create",
        "power output",
        "1000bhp",
        "car designed",
        "adrian newey",
        "wood stressed",
        "keen",
        "motorsport",
        "remain part",
        "cosworth motorsport",
        "core part",
        "position",
        "high risk",
        "strategy",
        "key",
        "sell",
        "engineering"
      ],
      "top_keywords": {
        "keywords": [
          {
            "text": "cosworth",
            "synonyms": {}
          },
          {
            "text": "receive",
            "synonyms": {}
          },
          {
            "text": "indycar",
            "synonyms": {}
          },
          {
            "text": "manufacturer",
            "synonyms": {}
          },
          {
            "text": "potential",
            "synonyms": {
              "nouns": [
                "potential",
                "potentiality",
                "potency"
              ]
            }
          },
          {
            "text": "programme",
            "synonyms": {
              "nouns": [
                "programme",
                "plan",
                "broadcast",
                "program"
              ],
              "verbs": [
                "programme",
                "program"
              ]
            }
          },
          {
            "text": "interest",
            "synonyms": {
              "nouns": [
                "interest",
                "stake",
                "interestingness",
                "involvement"
              ],
              "verbs": [
                "interest",
                "v"
              ]
            }
          },
          {
            "text": "spoken",
            "synonyms": {}
          },
          {
            "text": "manufacturer",
            "synonyms": {
              "nouns": [
                "manufacturer",
                "maker",
                "producer"
              ]
            }
          },
          {
            "text": "engine",
            "synonyms": {
              "nouns": [
                "engine",
                "locomotive"
              ]
            }
          }
        ],
        "simhash_raw": "cosworth engine indycar interest manufacturer manufacturers potential programme receives spoken",
        "simhash": 203819121
      }
    }
  }
}
```
