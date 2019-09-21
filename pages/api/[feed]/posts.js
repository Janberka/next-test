import fetch from 'isomorphic-fetch';
import { getFeedFromSlug } from './index';

const selector = ({title, link}) => ({title, link});

export const getPostsOfFeed = (feed) =>
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed.url}`)
    .then(r => r.json())
    .then(({items}) => items);

export default (req, res) => {
  const feed = getFeedFromSlug(req.query.feed);
  
  getPostsOfFeed(feed).then(items => {
    res.status(200).json(
      items.map(selector)
    )
  });
};