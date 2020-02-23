import styled from 'styled-components';
import { rgba } from 'polished';

import { black } from '../color';

export function Sponsors(props) {
  <SponsorsStyled {...props} />;
}

Sponsors.Diamond = props => <SponsorsStyled {...props} />;
Sponsors.Pearl = props => <SponsorsStyled {...props} />;
Sponsors.Garnet = props => <SponsorsStyled {...props} />;
Sponsors.Amethyst = props => <SponsorsStyled {...props} />;

const SponsorsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 3rem;
  width: 100%;
  border: 0.25rem solid ${rgba(black, 0.05)};
  border-radius: 0.5rem;
  margin: 2rem 0;
`;
