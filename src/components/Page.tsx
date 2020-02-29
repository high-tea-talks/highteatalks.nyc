import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';

import { Footer } from '../components';
import { red, blue, black } from '../color';
import { UserContext } from '../data';
import { rgba } from 'polished';

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
  const user = useContext(UserContext);
  console.log({ user });

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
      {user.loggedin && (
        <>
          <NavLink href="/listing">
            Jobs Listing<span>Lorem ipsum dolor.</span>
          </NavLink>
          <Avatar></Avatar>
        </>
      )}
    </NavStyled>
  );
}

const Avatar = styled.div`
  border: 0.2rem solid ${rgba(black, 0.35)};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    border: 0.2rem solid ${rgba(black, 0.25)};
    width: 1.5rem;
    height: 1rem;
    border-radius: 50% 50% 0 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
  }

  &:after {
    content: '';
    position: absolute;
    border: 0.2rem solid ${rgba(black, 0.25)};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
  }
`;

const PageStyled = styled.div`
  margin: 0 auto;
  max-width: 76.25rem;
`;

const NavStyled = styled.div`
  margin: 5rem 1rem 3rem 1rem;
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: ${red};
  padding: 0.25rem;
  margin: 0 2rem 0 0;
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
