import styled from 'styled-components';

import { Subtitle, Title } from './elements';
import background from '../assets/images/video-bg.jpg';
import ethereum from '../assets/images/logo-lite.png';

const Container = styled.div`
    background-image:url('${background}');
    background-position: center;
  p {
    margin-top: 1rem;
  }
  /* video {
    border-radius: 8px;
    width: 100%;
    :focus {
      outline: none;
    }
  } */
  .left {
    margin: auto 1rem;
  }
`;

const Hero = () => (
  <Container id="about">
    <div className="section container">
      <div className="columns is-vcentered">
        <div className="column left">
          {/* <video controls>
            <source
              src="https://pixabay.com/videos/bitcoin-coin-money-currency-crypto-34616/"
              type="video/mp4"
            />
            <source src="mov_bbb.ogg" type="video/ogg" />
            Your browser does not support HTML video.
          </video> */}
          <img src={ethereum} alt="ethereum" />
        </div>
        <div className="column">
          <Title white>Welcome to Ethflix</Title>
          <Subtitle>
            Smart contract technology is a new phenomenon in the modern
            decentralized economy. It allows, in accordance with the program
            code, to process and distribute the financial flows of digital
            assets. All processes take place in an open, decentralized
            blockchain network based on the Ethereum crypto currency, the
            infrastructure of which supports the operation of such contracts.
          </Subtitle>
        </div>
      </div>
    </div>
  </Container>
);

export default Hero;
