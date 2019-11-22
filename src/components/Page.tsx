import React from 'react';
import styled from 'styled-components';

import { Footer } from './Footer';

export const Page = ({ children, ...props }) => {
  return (
    <PageStyled {...props}>
      <Nav />
      {children}
      <Footer />
    </PageStyled>
  );
};

const Nav = ({}) => {
  return (
    <div>
      <a>high tea talks:// nyc</a>
      <a>About</a>
      <a>Upcoming Events</a>
      <a>Participate</a>
      <a>Sponsorship</a>
    </div>
  );
};

const PageStyled = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;
