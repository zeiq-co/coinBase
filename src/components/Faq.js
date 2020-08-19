import styled from 'styled-components';

import { Title } from './elements';
import FaqItem from './FaqItem';

const Container = styled.div`
  background: ${props => props.theme.colorGradient};
  .has-text-left {
    margin-top: 2rem;
  }
`;

const Faq = () => (
  <Container>
    <div className="section container">
      <div className="columns is-centered">
        <div className="column is-10 has-text-centered">
          <Title dark>Frequently Asked Questions</Title>
          <div className="has-text-left">
            <FaqItem />
            <FaqItem />
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default Faq;
