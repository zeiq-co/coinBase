import styled from 'styled-components';
import { Subtitle, Button } from './elements';

import hero from '../assets/images/hero-img.png';
import waveTop from '../assets/images/wave-1.svg';

const Container = styled.div`
  background: linear-gradient(174.48deg, #fd749b -12.41%, #281ac8 88.56%);
  h2 {
    color: ${props => props.theme.darkBlack};
    font-size: 8rem;
  }
  .img-wrapper {
    transition: all 0.5s ease;
    transition-duration: 5s;
    :hover {
      transform: rotateY(360deg);
    }
  }
  p {
    margin: 0rem 0rem 3rem;
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
        <div className="column has-text-centered">
          <h2 className="is-size-1-mobile is-uppercase has-text-weight-bold">
            Ethflix
          </h2>
          <Subtitle dark className="is-size-3">
            100% DECENTRALIZED
          </Subtitle>
          <Button secondary>JOIN US</Button>
        </div>
        <div className="column">
          <div className="img-wrapper">
            <img src={hero} className="hero-img" alt="hero-img" />
          </div>
        </div>
      </div>
    </div>
    <img src={waveTop} className="bottom-img" alt="wave" />
  </Container>
);

export default Hero;
