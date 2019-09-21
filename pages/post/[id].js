import Layout from '../../components/layout';
import Hero from '../../components/hero';
import Row from '../../components/row';
import Comments from '../../components/comments';
import { getPost } from '../../utils';


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
  const post = await getPost(id);
  return { id, post };
}

export default Post;
