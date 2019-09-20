import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-fetch';
import Nav from '../components/nav'

const Home = ({posts, comments}) => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Welcome to Next.js!</h1>
      <p className='description'>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className='row'>
        {comments.map(comment=>(
          <a href='https://nextjs.org/docs' className='card' key={comment.id}>
            <h3>{comment.title} &rarr;</h3>
            <p>{comment.body}</p>
          </a>
        ))}
      </div>


      <div className='row'>
        {posts.map(post=>(
          <a href='https://nextjs.org/docs' className='card' key={post.id}>
            <h3>{post.title} &rarr;</h3>
            <p>{post.body}</p>
          </a>
        ))}
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        background: #000;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

Home.getInitialProps = async () => {
  const [posts, comments] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts').then(r=>r.json()),
    fetch('https://jsonplaceholder.typicode.com/comments').then(r=>r.json())
  ]);

  return {posts, comments};
}

export default Home
