import { getFeedFromSlug } from '../index';
import { getPostsOfFeed } from '../posts';

export default async(req ,res) => {
  const feed = getFeedFromSlug(req.query.feed);
  const posts = await getPostsOfFeed(feed);
  return res.status(200).json(posts[req.query.postId - 1]);
}
