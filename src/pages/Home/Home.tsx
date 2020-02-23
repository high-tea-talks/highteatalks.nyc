import React from 'react';
import styled from 'styled-components';

import { Upcoming } from './Upcoming';

import { Page, HomeBlock, Sponsors } from '../../components';
import { yellow, red } from '../../color';
import { sponsors } from '../../data';

export function Home(props) {
  const sponsorJobs =
    sponsors.length > 0 &&
    sponsors.filter(({ href, tier }) => tier > 1 && href);

  const { darjeeling, silverTips, matcha, lavendar } = sponsors;

  return (
    <Page {...props}>
      <Hero />

      <Sponsors sponsors={darjeeling} />
      <About id="about" />
      <Sponsors sponsors={silverTips} />

      <Upcoming id="upcoming" />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <HomeBlock
          title="High Tea Talks are once every quarter."
          subtitle="Interested in attending?"
          links={<a href="#">Request an invitation</a>}
          style={{ background: yellow }}
        />
        <HomeBlock
          id="participate"
          title="Submit a talk idea for an upcoming session."
          subtitle="Why not? We don’t bite."
          links={<a href="#">Submit a talk idea</a>}
        />
        <HomeBlock
          title="Thank you to our Sponsor"
          links={sponsorJobs}
        >
          We're extremely grateful to have the High Tea Talks Fall
          event hosted and sponsored (location and drinks!!) by
          Skillshare. Also a huge thank you to Vimeo for sponsoring a
          part of the dinner. All of our sponsors are hiring–please
          checkout their job boards for exciting new opportunities.
        </HomeBlock>
        <HomeBlock title="Support High Tea Talks.">
          We're extremely grateful to have the High Tea Talks Fall
          event hosted and sponsored (location and drinks!!) by
          Skillshare. Also a huge thank you to Vimeo for sponsoring a
          part of the dinner. All of our sponsors are hiring–please
          checkout their job boards for exciting new opportunities.
        </HomeBlock>
      </div>

      <Sponsors sponsors={matcha} />
      <Sponsors sponsors={lavendar} />
    </Page>
  );
}

const Hero = styled.div`
  display: block;
  width: 100%;
  min-height: 800px;
  background-image: url('/static/hero_layer_bottom.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 6rem;
  border-radius: 0.1875rem;
`;

function About(props) {
  return (
    <div style={{ display: 'flex' }} {...props}>
      <div
        style={{
          height: '37rem',
          width: '50%',
          background: red,
          transform: 'rotate(-1deg) translateX(-1vw)',
          borderRadius: '0.1875rem',
        }}
      ></div>
      <div style={{ width: '50%', padding: '12rem 6rem' }}>
        <h2>About.</h2>
        <p>
          Engineering is not the easiest space for women and
          non-binary people. We say, enough of that! High Tea Talks is
          a monthly NYC soiree filled with brilliant brains and warm
          vibes. Our gatherings are designed specifically for mid- to
          senior-level engineers looking to advance their skills,
          level up on industry know-how, and indulge in positively
          divine company along the way. We'll handle all the details,
          you just get your wonderful self to the next session.
        </p>
      </div>
    </div>
  );
}
