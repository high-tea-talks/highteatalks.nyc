import React from 'react';
import App from 'next/app';
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

const theme = {
  colors: {
    primary: red,
  },
};
