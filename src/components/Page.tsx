import React from 'react';
import styled from 'styled-components';

import { Footer } from '../components';
import { red, blue } from '../color';

export function Page({ children, ...props }) {
  return (
    <PageStyled {...props}>
      <Nav />
      {children}
      <Footer />
    </PageStyled>
  );
}

function Nav({}) {
  return (
    <NavStyled>
      <NavLink href="/" style={{ marginRight: 'auto' }}>
        high tea talks:// nyc
      </NavLink>
      <NavLink href="/#about">
        About<span>What we do.</span>
      </NavLink>
      <NavLink href="/#upcoming">
        Upcoming Events<span>Next high tea.</span>
      </NavLink>
      <NavLink href="/#participate">
        Participate<span>Attend or speak!</span>
      </NavLink>
      <NavLink href="/partner">
        Sponsorship<span>Help us grow.</span>
      </NavLink>
    </NavStyled>
  );
}

const PageStyled = styled.div`
  margin: 0 auto;
  max-width: 76.25rem;
`;

const NavStyled = styled.div`
  margin: 5rem 1rem;
  display: flex;
`;

const NavLink = styled.a`
  color: ${red};
  padding: 0.25rem;
  margin: 0 2rem 2rem 0;
  position: relative;
  cursor: pointer;

  &:last-child {
    margin: 0 0 2rem 0;
  }

  &:hover > span::before {
    opacity: 1;
  }

  > span {
    display: block;
    padding: 0.25rem 0;
    color: ${blue};

    &:before {
      content: '';
      display: block;
      opacity: 0;
      width: 100%;
      transition: 120ms ease-in-out;
      border-top: 1px dotted ${red};
    }
  }
`;
