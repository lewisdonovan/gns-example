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

## Staying up to date

A scheduled workflow checks npm every day and bumps `google-news-scraper` here to the newest release, so this example always runs against the latest version.
