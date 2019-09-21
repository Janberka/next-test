import feed from '../../feed';

const getPostById = (id) =>
  feed.then(posts => posts[id - 1]);

export default (req, res) => 
    getPostById(req.query.id)
      .then(post => 
        res.status(200).json(post)
      );
