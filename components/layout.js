import Head from 'next/head';
import Nav from './nav';

const Layout = ({ children, title = 'Home' }) => (
  <div className="layout">
    <Head>
      <title>{title}</title>
    </Head>
    <Nav />
    {children}
    <style jsx>{`
      :global(body) {
        margin: 0;
        padding: 0;

        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }

      .layout {
        max-width: 1200px;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

export default Layout;
