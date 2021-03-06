import fetch from 'isomorphic-fetch';

export default (req, res) => 
  fetch(`https://jsonplaceholder.typicode.com/posts/${req.query.postId}/comments`)
    .then(r=> r.json())
    .then(comments => 
      res.status(200).json(comments)
    );
