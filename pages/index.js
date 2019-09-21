import { motion } from 'framer-motion';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Row from '../components/row';
import Card from '../components/card';
import { getPosts } from '../utils';

const Home = ({ posts }) => (
  <Layout>
    <Hero
      title="Welcome to Next.js!"
      description={<>To get started, edit <code>pages/index.js</code> and save to reload</>}
    />
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ enter: { transition: { staggerChildren: 0.1 } } }}
      >
      <Row>
        {posts.map((post, i)=>(
          <Card href="/post/[id]" as={`/post/${i + 1}`} key={i}>
            <h3>{post.title} &rarr;</h3>
          </Card>
        ))}
      </Row>
    </motion.div>
  </Layout>
);

Home.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts };
};

export default Home
