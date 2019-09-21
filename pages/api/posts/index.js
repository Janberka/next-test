import feed from '../feed';

const selector = ({title, link}) => ({title, link});

export default (req, res) => 
    feed.then(posts=> 
        res.status(200).json(
          posts.map(selector)
        )
      );
