import React from 'react';
import styled from 'styled-components';

import { Page, HomeBlock } from '../../components';
import { SHE } from '../../data';
import { blue, white } from '../../color';

export function Upcoming(props) {
  return (
    <Page {...props}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          background: blue,
          color: white,
        }}
      >
        <div
          style={{ width: '100%', margin: '2rem', padding: '2rem' }}
        >
          <img
            src="/static/the_wing.png"
            style={{ maxWidth: '10rem' }}
          />
          <h4>Spring Session. 6:00pm April 3rd</h4>
          <h3 style={{ fontSize: '1.5rem' }}>
            The Wing, Sponsoring High Tea Talks
          </h3>

          <h5>
            Hosted at The Wing Bryant Park:
            <a
              href="#"
              title="Visit Google maps for directions to The Wing"
            >
              25 W 39th St Fl 11, New York, NY 10018
            </a>
          </h5>
        </div>
        <div
          style={{ width: '100%', margin: '2rem', padding: '2rem' }}
        >
          <h1>Attendees</h1>
          {attendees.map((attendee, key) => (
            <div key={key}>
              {attendee.name}
              <br />
              {attendee.company}
              <br />
            </div>
          ))}
        </div>
        <div
          style={{ width: '100%', margin: '2rem', padding: '2rem' }}
        >
          <h1>Slack</h1>
          <div>Join High Tea Slack!</div>
        </div>
      </div>
    </Page>
  );
}

const attendees = [
  {
    name: 'Malika',
    company: 'care/of',
    title: null,
    pronouns: SHE,
  },
  {
    name: 'Sean',
    company: 'Vimeo',
    title: 'Senior Engineer, Design Systems',
    pronouns: SHE,
  },
];
