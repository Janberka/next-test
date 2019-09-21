import { motion } from 'framer-motion';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import Row from '../../components/row';
import Card from '../../components/card';
import { getPosts, getFeed } from '../../utils';

const variants = {
  show: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

const Feed = ({feed, posts}) => {
  return (
    <Layout title={feed.title}>
      <Hero
        title={feed.title}
        description={<a target="_blank" href={feed.website}>{feed.website}</a>}
      />
      <motion.div initial="hidden" animate="show" variants={variants}>
        <Row>
            {posts && posts.map((post, i)=>(
              <Card href='/[feed]/[postId]' as={`/${feed.slug}/${i + 1}`} key={i}>
                <h3>{post.title}</h3>
              </Card>
            ))}
        </Row>
      </motion.div>
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
