import googleNewsScraper from 'google-news-scraper';

// Optional: with a SerpApi key, results still come through when Google rate-limits you
const apikey = process.env.SERPAPI_API_KEY;

const articles = await googleNewsScraper({
  searchTerm: 'The Oscars',
  timeframe: '1d',
  limit: 10,
  ...(apikey ? { third_party: { source: 'serpapi', apikey, primary: false } } : {}),
});

for (const { title, source, time, link, provider } of articles) {
  console.log(`${title}\n  ${source}, ${time}${provider ? ` (via ${provider})` : ''}\n  ${link}\n`);
}

console.log(`${articles.length} articles`);
