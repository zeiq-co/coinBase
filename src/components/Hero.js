import styled from 'styled-components';
import { Subtitle, Button } from './elements';

import hero from '../assets/images/hero-img.png';

const Container = styled.div`
  background: ${props => props.theme.primaryColor};
  h2 {
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
          <h2 className="is-size-1-mobile is-uppercase has-text-weight-bold has-text-white">
            Ethflix
          </h2>
          <Subtitle className="is-size-3 has-text-white">
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
  </Container>
);

export default Hero;
