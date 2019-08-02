import React from 'react';
import styled from 'styled-components';
import { Page } from '../Page';

export const Home = props => {
  return (
    <Page {...props}>
      <Hero />
      {/* <About />
      <Upcoming />
      <Attend />
      <Submit />
      <Sponsors />
      <SupportUs /> */}
    </Page>
  );
};

const Hero = styled.div`
  display: block;
  width: 100%;
  min-height: 800px;
  background-image: url('/static/hero_layer_bottom.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;
