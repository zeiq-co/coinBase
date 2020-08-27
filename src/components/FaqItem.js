import React, { useState } from 'react';
import styled from 'styled-components';

import { Subtitle, Title } from './elements';
import iconDown from '../assets/images/icon-up.svg';
import iconUp from '../assets/images/icon-down.svg';

const Container = styled.div`
  margin-bottom: 2rem;
  .item {
    padding: 0.75rem 1.5rem;
    background: ${props => props.theme.gradientSecondary};
    border-radius: 10px;
    border: none;
    width: 100%;
  }
  p {
    line-height: 27px !important;
  }

  .is-flex {
    justify-content: space-between;
    align-items: center;
  }
  img {
    height: 0.75rem;
  }
  p {
    padding: 1rem 1rem 0;
  }
`;

const FaqItem = ({ data }) => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <button className="item" onClick={() => setActive(!active)} type="submit">
        <div className="is-flex">
          <Title white className="is-size-5 has-text-weight-bold is-uppercase">
            {data.title}
          </Title>
          {active ? (
            <img src={iconUp} alt="arrow-up" />
          ) : (
            <img src={iconDown} alt="arrow-down" />
          )}
        </div>
      </button>
      {active && <Subtitle>{data.subtitle}</Subtitle>}
    </Container>
  );
};
export default FaqItem;
