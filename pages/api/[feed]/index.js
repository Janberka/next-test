import feeds from '../../../data/feeds';

export const getFeedFromSlug = slug => feeds.find(feed => feed.slug === slug);

export default (req, res) => {
  const feed = getFeedFromSlug(req.query.feed);
  return res.status(200).json(feed);
}
