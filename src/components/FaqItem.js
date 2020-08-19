import React, { useState } from 'react';
import styled from 'styled-components';

import { Subtitle, Title } from './elements';
import waveTop from '../assets/images/wave-2.svg';
import waveBottom from '../assets/images/wave-3.svg';

const Container = styled.div`
  padding: 1rem;
  background: ${props => props.theme.darkBlack};
  border-radius: 10px;
  p {
    line-height: 27px !important;
  }
  svg {
    color: #fff;
  }
  button {
    background: transparent;
    border: none;
  }
  .is-flex {
    justify-content: space-between;
  }
`;

const FaqItem = () => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <div className="is-flex">
        <Title className="is-size-5 has-text-weight-bold is-uppercase">
          WHAT is ETHFLIX?
        </Title>
        <button onClick={() => setActive(!active)} type="submit">
          {active ? (
            <p>
              <i className="fas fa-chevron-up"></i>
            </p>
          ) : (
            <p>
              <i className="fas fa-chevron-down"></i>
            </p>
          )}
        </button>
      </div>
      {active && (
        <Subtitle>
          Forsage is an international next-gen crowdfunding platform and the
          first in the history of matrix marketing based on Ethereum smart
          contracts.
        </Subtitle>
      )}
    </Container>
  );
};
export default FaqItem;
