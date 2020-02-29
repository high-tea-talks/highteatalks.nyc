import React, { Fragment } from 'react';
import styled from 'styled-components';

import { SHE } from '../data';
import { red } from '../color';

export function Footer(props) {
  return (
    <FooterStyled {...props}>
      High Tea Talks NYC is the thoughtchild of{' '}
      <Squad people={cofounders} />
      <Designers people={designers} style={{ marginLeft: 'auto' }} />
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  display: flex;
  padding: 3rem 1rem;
  background: ${red};
  border-radius: 0.1875rem;
`;

function Squad({ people }) {
  return people.map((babe, key, { length }) => (
    <a
      key={key}
      href={'https://twitter.com/' + babe.url}
      target="_blank"
    >
      {babeText(babe, key, length)}
    </a>
  ));
}

function Designers({ people, ...props }) {
  return (
    <span {...props}>
      {people.map(({ name, url, role }, key) => (
        <Fragment key={key}>
          {role}:
          <a href={'http://' + url} target="_blank">
            {name}
          </a>
        </Fragment>
      ))}
    </span>
  );
}

function babeText({ name, pronouns }, i, length) {
  const comma = i < length - 1 ? ', ' : '';
  return name + pronouns + comma;
}

const cofounders = [
  {
    name: 'Malika',
    pronouns: SHE,
    url: 'liakamb',
  },
  {
    name: 'Alyssa',
    pronouns: SHE,
    url: 'slapspapayas',
  },
  {
    name: 'Sean',
    pronouns: SHE,
    url: 'seanmcintyre',
  },
];

const designers = [
  {
    name: 'Malika Butler',
    role: 'Design',
    url: 'malikabutler.com',
  },
  {
    name: 'Whitney Brown',
    role: 'Illustrations',
    url: 'legendofwhitney.com',
  },
];
