import fetch from 'isomorphic-fetch';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import Row from '../../components/row';
import Comments from '../../components/comments';

const Post = ({
  id,
  post: {
    title, description
  }
}) => {
  return (
    <Layout title={title}>
      <Hero title={title}/>
      <Row style={{maxHeight: '300px', overflow: 'hidden'}}>
        <div dangerouslySetInnerHTML={{ __html: description }}/>
      </Row>
      <Comments postId={id}/>
    </Layout>
  );
}

Post.getInitialProps = async({query: {id}}) => {
  const post = await fetch(`http://localhost:3000/api/posts/${id}`).then(r=>r.json());
  return { id, post };
}

export default Post;
