import React from 'react';
import App from 'next/app';
import {
  css,
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import { red } from '../src/color';
import { fontFace } from '../src/typography';

const theme = {
  colors: {
    primary: red,
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  ${fontFace};

  html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: 'Cutive Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: -0.04rem;
    min-height: 100%;
    background: #fffbf5;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Butler Medium', Garamond, Baskerville, 'Baskerville Old Face', 'Hoefler Text', 'Times New Roman', serif;
    letter-spacing: 0.02rem;
  }

  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre, ul, li {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    background: transparent;
    border-color: transparent;
    padding: 0;
    margin: 0;
  }
`;
