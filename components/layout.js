import Head from 'next/head';
import Nav from './nav';

export default ({ children, title = 'Home' }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Nav />
    {children}
  </div>
)
