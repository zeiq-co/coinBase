import styled from 'styled-components';

import { Subtitle, Title } from './elements';
import waveBottom from '../assets/images/wave-2.svg';

const Container = styled.div`
  background: ${props => props.theme.darkBlack};
  p {
    margin-top: 1rem;
  }
`;

const Hero = () => (
  <Container className="section">
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column"></div>
        <div className="column">
          <Title>Welcome to CoinBase</Title>
          <Subtitle>
            We have the best rates . Simply start your exchange right now. Sign
            up for our Affiliate program and earn commission from each exchange.
            The earnings are credited in your account instantly and can be
            withdrawn right away. Also note some exchange directions are hidden
            for unregistered user. To ensure to have access to all our exchange
            directions and benefits kindly sign up and verify your identity.
          </Subtitle>
        </div>
      </div>
    </div>
  </Container>
);

export default Hero;
