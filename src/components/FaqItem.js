import React, { useState } from 'react';
import styled from 'styled-components';

import { Subtitle, Title } from './elements';
import iconDown from '../assets/images/icon-up.svg';
import iconUp from '../assets/images/icon-down.svg';

const Container = styled.div`
  padding: 1rem 1.5rem;
  background: ${props => props.theme.darkBlack};
  border-radius: 10px;
  margin-bottom: 2rem;
  p {
    line-height: 27px !important;
  }
  button {
    background: transparent;
    border: none;
  }
  .is-flex {
    justify-content: space-between;
  }
  img {
    height: 0.75rem;
  }
`;

const FaqItem = ({ data }) => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <div className="is-flex">
        <Title className="is-size-5 has-text-weight-bold is-uppercase">
          {data.title}
        </Title>
        <button onClick={() => setActive(!active)} type="submit">
          {active ? (
            <img src={iconUp} alt="arrow-up" />
          ) : (
            <img src={iconDown} alt="arrow-down" />
          )}
        </button>
      </div>
      {active && <Subtitle>{data.subtitle}</Subtitle>}
    </Container>
  );
};
export default FaqItem;
