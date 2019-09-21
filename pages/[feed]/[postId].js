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
    <>
      <Hero title={title}/>
      <Row style={{maxHeight: '300px', overflow: 'hidden'}}>
        <div dangerouslySetInnerHTML={{ __html: description }}/>
      </Row>
      <Comments postId={postId}/>
    </>
  );
}

Post.getInitialProps = ({query: {feed, postId}}) => 
  getPost(feed, postId)
    .then(post => ({postId, post}));

export default Post;
