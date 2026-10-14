import googleNewsScraper from 'google-news-scraper';

const articles = await googleNewsScraper({
  searchTerm: 'The Oscars',
  timeframe: '1d',
  limit: 10,
});

for (const { title, source, time, link } of articles) {
  console.log(`${title}\n  ${source}, ${time}\n  ${link}\n`);
}

console.log(`${articles.length} articles`);
