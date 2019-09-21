import Layout from '../../components/layout';
import Hero from '../../components/hero';
import Row from '../../components/row';
import Comments from '../../components/comments';
import { getPost } from '../../utils';


const Post = ({
  postId,
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
      <Comments postId={postId}/>
    </Layout>
  );
}

Post.getInitialProps = ({query: {feed, postId}}) => 
  getPost(feed, postId)
    .then(post => ({postId, post}));

export default Post;
