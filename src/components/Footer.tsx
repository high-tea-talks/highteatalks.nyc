import React from 'react';
import { SHE } from '../data/pronouns';

export const Footer = props => {
  return (
    <footer {...props}>
      High Tea Talks NYC is the thoughtchild of{' '}
      <Squad
        people={[
          { name: 'Malika', pronouns: SHE, url: 'liakamb' },
          { name: 'Alyssa', pronouns: SHE, url: 'slapspapayas' },
          { name: 'Sean', pronouns: SHE, url: 'seanmcintyre' },
        ]}
      />
      <Designers
        people={[
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
        ]}
      />
    </footer>
  );
};

const Squad = ({ people, ...props }) =>
  people.map(
    (babe, i, { length }, comma = i < length - 1 && ', ') => (
      <a href={'https://twitter.com/' + babe.url} target="_blank">
        {babe.name} ({babe.pronouns}){comma}
      </a>
    ),
  );

const Designers = ({ people, ...props }) =>
  people.map(({ name, url, role }, i, { length }) => (
    <>
      {role}:
      <a href={'http://' + url} target="_blank">
        {name}
      </a>
    </>
  ));
