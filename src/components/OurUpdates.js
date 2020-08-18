import styled from 'styled-components';

import { Subtitle, Title } from './elements';
import waveTop from '../assets/images/wave-2.svg';
import waveBottom from '../assets/images/wave-3.svg';
import bitcoin from '../assets/images/bitcoin.svg';
import bankBuilding from '../assets/images/bank-building.svg';
import ethereum from '../assets/images/ethereum.svg';

const Container = styled.div`
  background: ${props => props.theme.colorGradient};
  .section {
    padding: 2rem 1.5rem;
  }
  .bottom-img {
    margin-bottom: -0.5rem;
  }
  .top-img {
    margin-top: -2px;
  }
  .is-centered {
    border-radius: 30px;
    background: ${props => props.theme.darkBlack};
    padding: 0.5rem 2rem;
  }
  .column {
    padding: 0.75rem 0rem;
  }
  h5 {
    border-bottom: 1px solid #bbbbbb;
    padding-bottom: 1rem;
  }
  .is-flex {
    justify-content: space-between;
  }
`;

const rateItems = [
  { id: 1, image: bitcoin, name: 'btc', buy: '350', sell: '370' },
];

const Hero = () => (
  <Container>
    <img src={waveTop} className="top-img" alt="wave" />
    <div className="section container">
      <div className="columns is-centered">
        <div className="column">
          <h5 className="title is-5 is-uppercase has-text-centered-mobile">
            OUR RATES
          </h5>
          {rateItems.map(item => (
            <div key={item.id} className="is-flex">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img src={item.image} alt="bitcoin" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="subtitle is-size-6">{item.name}</p>
                </div>
              </div>
              <div>
                <p className="subtitle is-size-6"> We Buy @ ₦{item.buy}/$</p>
                <p className="subtitle is-size-6">We Sell @ ₦{item.sell}/$</p>
              </div>
            </div>
          ))}
        </div>
        <div className="column">
          <h5 className="title is-5 is-uppercase has-text-centered">
            OUR RESERVES
          </h5>
        </div>
        <div className="column">
          <h5 className="title is-5 is-uppercase has-text-right has-text-centered-mobile">
            LATEST EXCHANGES
          </h5>
          <div></div>
        </div>
      </div>
    </div>
    <img src={waveBottom} className="bottom-img" alt="wave" />
  </Container>
);

export default Hero;
