import feeds from '../../data/feeds';

export default (req, res) => res.status(200).json(feeds);
