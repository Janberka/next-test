import React from 'react'
import fetch from 'isomorphic-fetch';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Row from '../components/row';
import Card from '../components/card';

const Home = ({ posts }) => (
  <Layout>
    <Hero
      title="Welcome to Next.js!"
      description={<>To get started, edit <code>pages/index.js</code> and save to reload</>}
      >
        <Row>
          {posts.map(post=>(
            <Card href={`/posts/${post.id}`} key={post.id}>
              <h3>{post.title} &rarr;</h3>
              <p>{post.body}</p>
            </Card>
          ))}
        </Row>
    </Hero>
  </Layout>
)

Home.getInitialProps = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(r=>r.json())
  return { posts };
}

export default Home
