import { css } from 'styled-components';

export const fontFace = css`
  @font-face {
    font-family: 'Cutive Mono';
    font-weight: normal;
    font-style: normal;
    src: url('/static/fonts/CutiveMono-Regular.ttf')
      format('truetype');
  }

  @font-face {
    font-family: 'Butler Regular';
    font-weight: normal;
    font-style: normal;
    src: url('/static/fonts/butler_regular-webfont.woff2')
        format('woff2'),
      url('/static/fonts/butler_regular-webfont.woff') format('woff');
  }

  @font-face {
    font-family: 'Butler Medium';
    font-weight: bold;
    font-style: bold;
    src: url('/static/fonts/butler_medium-webfont.woff2')
        format('woff2'),
      url('/static/fonts/butler_medium-webfont.woff') format('woff');
  }
`;
