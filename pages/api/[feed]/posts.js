import fetch from 'isomorphic-fetch';
import { getFeedFromSlug } from './index';

const selector = ({title, link}) => ({title, link});

const feeds = {};

export const getPostsOfFeed = ({url, slug}) => {
    if (!feeds[slug]) {
      feeds[slug] = fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`)
      .then(r => r.json())
      .then(({items}) => {
        setTimeout(()=>{
          delete feeds[slug];
        }, 1000 * 60);
        return items;
      });
    }
    
    return feeds[slug];
  }

export default (req, res) => {
  const feed = getFeedFromSlug(req.query.feed);
  
  getPostsOfFeed(feed).then(items => {
    res.status(200).json(
      items.map(selector)
    )
  });
};