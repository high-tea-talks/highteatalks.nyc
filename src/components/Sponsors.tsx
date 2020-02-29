import styled from 'styled-components';
import { rgba } from 'polished';

import { black } from '../color';

export function Sponsors({ children, sponsors, ...props }: any) {
  console.log({ sponsors });
  return (
    sponsors && (
      <Wrapper {...props}>
        <h1>{sponsors.name} Sponsors</h1>
        <br />

        <SponsorsStyled>
          {sponsors.map(({ name }, key) => (
            <div key={key}>{name}</div>
          ))}
        </SponsorsStyled>
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  text-align: center;
  padding: 6rem 3rem;
  width: 100%;
  border: 0.5rem dotted ${rgba(black, 0.05)};
  border-radius: 0.5rem;
  margin: 2rem 0;
`;

const SponsorsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
