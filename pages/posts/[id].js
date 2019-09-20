import React, {useState, useEffect} from 'react'
import fetch from 'isomorphic-fetch';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import Row from '../../components/row';
import Card from '../../components/card';

const Post = ({ post: { id, title, description, body } }) => {
  const [ comments, setComments ] = useState(false);

  useEffect(() => {
    if (!comments) {
      const loadComments = async() => {
        const loadedComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(r=>r.json());
        setComments(loadedComments);
      }

      loadComments();
    }
  }, []);

  return (
    <Layout title={title}>
      <Hero
        title={title}
        description={description}
      >
        <Row>{body}</Row>
      </Hero>
      <Row>
      {comments && comments.map(comment=>(
        <Card key={comment.id} href='#'>
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
