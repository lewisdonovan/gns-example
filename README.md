# gns-example

Minimal example project for [google-news-scraper](https://github.com/lewisdonovan/google-news-scraper).

## Running locally

Requires Node.js 18 or later.

```bash
git clone https://github.com/lewisdonovan/gns-example
cd gns-example
npm install
npm start
```

This prints the latest Google News articles for "The Oscars" from the past day. Edit `index.js` to try a different search term or any of the other options in the [main README](https://github.com/lewisdonovan/google-news-scraper).

## Using a third-party fallback

Google rate-limits busy IPs, which is common on cloud servers. If you have a [SerpApi](https://serpapi.com/google-news-api) key, set it and the example falls back to SerpApi's Google News API whenever the scraper can't reach Google:

```bash
SERPAPI_API_KEY=your-key npm start
```

Each article shows which provider it came from. See [`third_party`](https://github.com/lewisdonovan/google-news-scraper#third_party) in the main README for the other options, including using SerpApi first.

## Staying up to date

A scheduled workflow checks npm every day and bumps `google-news-scraper` here to the newest release, so this example always runs against the latest version.
