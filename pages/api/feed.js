import fetch from 'isomorphic-fetch';

const rssUrl = "https://dev.to/feed";

const feed = fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`).then(r=>r.json()).then(({items})=>items);

export default feed;
