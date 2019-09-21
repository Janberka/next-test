import React from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3'
  }
};

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <AnimatePresence exitBeforeEnter>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} key={router.route} />
        </ThemeProvider>
      </AnimatePresence>
    );
  }
}

export default MyApp;
