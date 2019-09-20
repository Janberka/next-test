import React, {useState, useEffect} from 'react'
import fetch from 'isomorphic-fetch';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import Row from '../../components/row';
import Card from '../../components/card';

const Post = ({ post }) => {
  const [ comments, setComments ] = useState([]);

  useEffect(async() => {
    if (!comments.length) {
      const loadedComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then(r=>r.json());
      setComments(loadedComments);
    }
  }, []);

  return (
    <Layout title={post.title}>
      <Hero
        title={post.title}
        description={post.description}
      >
        <Row>{post.body}</Row>
      </Hero>
      <Row>
      {comments.map(comment=>(
        <Card key={comment.id}>
          <p>{comment.body}</p>
        </Card>
      ))}
      </Row>
    </Layout>
  );
}

Post.getInitialProps = async({query: {id}}) => {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(r=>r.json());
  return { post };
}

export default Post;
