import Layout from '../../components/layout';
import Hero from '../../components/hero';
import Row from '../../components/row';
import Card from '../../components/card';
import { getPosts, getFeed } from '../../utils';

const Feed = ({feed, posts}) => {
  return (
    <Layout title={feed.title}>
      <Hero
        title={feed.title}
        description={<a target="_blank" href={feed.website}>{feed.website}</a>}
      />
      <Row>
        {posts && posts.map((post, i)=>(
          <Card href='/[feed]/[postId]' as={`/${feed.slug}/${i + 1}`} key={i}>
            <h3>{post.title}</h3>
          </Card>
        ))}
      </Row>
    </Layout>
  )
};

Feed.getInitialProps = ({query: {feed}}) =>
  Promise.all([
    getFeed(feed),
    getPosts(feed)
  ])
  .then(([feed, posts]) => ({feed, posts}))

export default Feed;
