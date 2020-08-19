import styled from 'styled-components';

import { Subtitle, Title } from './elements';

const Container = styled.div`
  background: ${props => props.theme.colorGradient};
  .faq {
    padding: 1rem;
    background: ${props => props.theme.colorGradient};
    border-radius: 10px;
  }
`;

const Faq = () => (
  <Container>
    <div className="section container">
      <div className="columns is-centered">
        <div className="column is-10 has-text-centered">
          <Title dark>Frequently Asked Questions</Title>
          <div className="faq">dd</div>
        </div>
      </div>
    </div>
  </Container>
);
export default Faq;
