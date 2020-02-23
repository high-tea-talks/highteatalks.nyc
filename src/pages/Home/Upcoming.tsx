import React from 'react';
import styled from 'styled-components';

import { WineBottle } from '../../components';
import { white, blue } from '../../color';

export function Upcoming(props) {
  return (
    <UpcomingStyled {...props}>
      <div style={{ zIndex: 1, maxWidth: '36rem' }}>
        <img
          src="/static/the_wing.png"
          style={{ maxWidth: '10rem' }}
        />
        <h4>Spring Session. 6:00pm April 3rd</h4>
        <h3 style={{ fontSize: '1.5rem' }}>
          The Wing, Sponsoring High Tea Talks
        </h3>

        <h5>
          {Pin}
          Hosted at The Wing Bryant Park:
          <a
            href="#"
            title="Visit Google maps for directions to The Wing"
          >
            25 W 39th St Fl 11, New York, NY 10018
          </a>
        </h5>
        <ul>
          <li>
            <span>6:00</span>
            <span>Attendee Arrivals &amp; Dinner</span>
          </li>
          <li>
            <span>7:00</span>
          </li>

          <li>
            <span>8:30</span>
            <span>Salon</span>
          </li>
          <li>
            <span>10:00</span>
            <span>Au revoir!</span>
          </li>
        </ul>
      </div>
      <WineBottle />
    </UpcomingStyled>
  );
}

const Pin = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="23"
    viewBox="0 0 17 23"
  >
    <path
      fill="#F06868"
      fill-rule="evenodd"
      d="M511.5,2399.90893 C509.916088,2399.90893 503,2390.19442 503,2385.5 C503,2380.80558 506.80558,2377 511.5,2377 C516.19442,2377 520,2380.80558 520,2385.5 C520,2390.19442 513.083912,2399.90893 511.5,2399.90893 Z M511.5,2391.16667 C514.281879,2391.16667 516.537037,2388.91151 516.537037,2386.12963 C516.537037,2383.34775 514.281879,2381.09259 511.5,2381.09259 C508.718121,2381.09259 506.462963,2383.34775 506.462963,2386.12963 C506.462963,2388.91151 508.718121,2391.16667 511.5,2391.16667 Z"
      transform="translate(-503 -2377)"
    ></path>
  </svg>
);

const UpcomingStyled = styled.div`
  padding: 16rem 24rem;
  line-height: 2;
  color: ${white};
  position: relative;
  border-radius: 0.1875rem;
  margin: 6rem 0 -2rem;

  &:after {
    background: ${blue};
    position: absolute;
    width: 86%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    content: '';
    border-radius: 0.1875rem;
    transform: rotate(2deg);
  }
`;
