import React from 'react';
import styled from 'styled-components';

import { Page, HomeBlock, Sponsors } from '../../components';
import { sponsors } from '../../data';

const Tier = styled(HomeBlock)`
  width: 25%;
`;

export function Partner(props) {
  const tiers = Object.keys(sponsors)
    .filter(a => isNaN(parseInt(a)))
    .map(tier => sponsors[tier])
    .sort((a, b) => (a.commitment > b.commitment ? 1 : -1));

  const sponsorJobs =
    sponsors.length > 0 &&
    sponsors.filter(({ href, tier }) => tier > 1 && href);

  const { darjeeling, silverTips, matcha, lavendar } = sponsors;

  return (
    <Page {...props}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tiers.map(({ name, commitment }, key) => (
          <Tier key={key} title={name}>
            <h2>${commitment}/yr</h2>
            or
            <h2>${commitment / 10}/mo</h2>
          </Tier>
        ))}
      </div>
      <Sponsors sponsors={darjeeling} />
      <Sponsors sponsors={silverTips} />
      <Sponsors sponsors={matcha} />
      <Sponsors sponsors={lavendar} />
    </Page>
  );
}

{
  /* <Tier title="Garnet">
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
</Tier> */
}
