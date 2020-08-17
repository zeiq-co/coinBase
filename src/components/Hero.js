import styled from 'styled-components';
import { Subtitle, Button } from './elements';

import hero from '../assets/images/hero-img.png';
import waveTop from '../assets/images/wave-1.svg';

const Container = styled.div`
  background: linear-gradient(174.48deg, #fd749b -12.41%, #281ac8 88.56%);
  h2,
  strong {
    color: ${props => props.theme.darkBlack};
  }
  p {
    margin: 1rem 0rem 2rem;
  }
  .bottom-img {
    margin-bottom: -3rem;
  }
  @media only screen and (max-width: 768px) {
    .bottom-img {
      margin-bottom: -1rem;
    }
  }
`;

const Hero = () => (
  <Container>
    <div className="section container">
      <div className="columns is-vcentered">
        <div className="column">
          <h2 className="is-size-2">
            We provide easy solution to exchange your
            <strong> Bitcoin/ GiftCard for money</strong>
          </h2>
          <Subtitle dark>
            CoinBase is a platform for trading your bitcoin and giftcard at the
            best rate, why not give us a trial.
          </Subtitle>
          <Button secondary>get started</Button>
        </div>
        <div className="column">
          <img src={hero} alt="hero-img" />
        </div>
      </div>
    </div>
    <img src={waveTop} className="bottom-img" alt="wave" />
  </Container>
);

export default Hero;
