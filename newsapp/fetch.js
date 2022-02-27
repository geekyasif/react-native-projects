$ npm install newsapi --save
Usage
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f44fe3073fa348b488d0c8ba983d8ef9');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
// To query sources
// All options are optional
newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
});







  // console.log(news.title)




    // const apiKey = "f44fe3073fa348b488d0c8ba983d8ef9"

    // fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apiKey}`)
    //   .then(res => res.json())
    //   .then((data) => {
    //     data.articles.map((article) => {
    //       console.log(article)
    //       setNews(article)

    //     })
    //   })
    //   .catch(err => console.log(err))


    