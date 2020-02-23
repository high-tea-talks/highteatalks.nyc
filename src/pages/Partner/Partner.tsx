import React from 'react';
import styled from 'styled-components';

import { Page, HomeBlock } from '../../components';

const Tier = styled(HomeBlock)`
  width: 25%;
`;

export function Partner(props) {
  return (
    <Page {...props}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Tier title="Amethyst">
          <h1>$90/yr</h1>
          or
          <h1>$9/mo</h1>
          <ul>
            <li></li>
          </ul>
        </Tier>
        <Tier title="Garnet">
          <h1>$300/yr</h1>
          or
          <h1>$30/mo</h1>
          <ul>
            <li>1 priority spot for your employees at all events</li>
            <li>medium format logo on highteatalks.nyc homepage</li>
          </ul>
        </Tier>
        <Tier title="Pearl">
          <h1>$3,000/yr</h1>
          or
          <h1>$300/mo</h1>
          <ul>
            <li>brand/hiring presence at all high tea events</li>
            <li>1 priority spot for your employees at all events</li>
            <li>medium format logo on highteatalks.nyc homepage</li>
          </ul>
        </Tier>
        <Tier title="Pink Diamond">
          <h1>$9,000/yr</h1>
          or
          <h1>$900/mo</h1>
          <ul>
            <li>brand/hiring presence at all high tea events</li>
            <li>2 priority spots for your employees at all events</li>
            <li>large format logo on highteatalks.nyc homepage</li>
            <li>
              shout-out from the hosts with onscreen logo solo at
              every event
            </li>
          </ul>
        </Tier>
      </div>
    </Page>
  );
}
