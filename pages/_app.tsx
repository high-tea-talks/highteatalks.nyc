import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { red } from '../src/color';
import { UserContext } from '../src/data';
import { GlobalStyle } from '../src/util';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        {/* <Head>
          <script src="https://www.gstatic.com/firebasejs/ui/4.5.0/firebase-ui-auth.js"></script>
          <link
            type="text/css"
            rel="stylesheet"
            href="https://www.gstatic.com/firebasejs/ui/4.5.0/firebase-ui-auth.css"
          />
        </Head> */}
        {/* // simulate loggedin user */}
        <UserContext.Provider value={{ loggedin: true }}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </UserContext.Provider>
      </>
    );
  }
}

// test theme
const theme = {
  colors: {
    primary: red,
  },
};
