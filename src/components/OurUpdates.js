import styled from 'styled-components';

import waveTop from '../assets/images/wave-2.svg';
import waveBottom from '../assets/images/wave-3.svg';
import bitcoin from '../assets/images/bitcoin.svg';
import bankBuilding from '../assets/images/bank-building.svg';
import ethereum from '../assets/images/ethereum.svg';
import transaction from '../assets/images/Double-transfer.svg';
import rightArrow from '../assets/images/right-arrow.svg';
import UpdateItem from './UpdateItem';

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
  .columns {
    border-radius: 30px;
    background: ${props => props.theme.darkBlack};
    padding: 0.5rem 2rem;
    justify-content: space-between;
  }
  .column {
    padding: 0.75rem 0rem;
  }
  h5 {
    padding-bottom: 1rem;
  }
`;

const Transaction = styled.div`
  margin-bottom: ${props => (props.margin ? '3.5rem' : '2.2rem')};
`;
const rateItems = [
  {
    id: 1,
    image: bitcoin,
    name: 'BTC',
    title: 'We Buy @ ₦350/$',
    subtitle: 'We Sell @ ₦370/$',
  },
  {
    id: 2,
    image: ethereum,
    name: 'ETH',
    title: 'We Buy @ ₦345/$',
    subtitle: 'We Sell @ ₦370/$',
  },
];

const reserves = [
  {
    id: 1,
    image: bankBuilding,
    name: 'Bank Transfer',
    title: 'NGN',
    subtitle: '#3452030300303.24/$',
  },
  {
    id: 1,
    image: bitcoin,
    name: 'Bitcoin',
    title: '399.98 BTC',
  },
  {
    id: 1,
    image: ethereum,
    name: 'Ethereum',
    title: '1000.00 ETH',
  },
];

const Hero = () => (
  <Container>
    <img src={waveTop} className="top-img" alt="wave" />
    <div className="section container">
      <div className="columns">
        <div className="column is-3">
          <h5 className="title is-5 is-uppercase has-text-centered-mobile">
            OUR RATES
          </h5>
          {rateItems.map(item => (
            <UpdateItem item={item} />
          ))}
        </div>
        <div className="column is-4">
          <h5 className="title is-5 is-uppercase has-text-centered">
            OUR RESERVES
          </h5>
          {reserves.map(item => (
            <UpdateItem item={item} />
          ))}
        </div>
        <div className="column is-3">
          <h5 className="title is-5 is-uppercase has-text-right has-text-centered-mobile">
            LATEST EXCHANGES
          </h5>
          <Transaction margin className="transaction">
            <p className="subtitle is-size-6">
              Bitcoin BTC <img src={rightArrow} alt="transaction-arrow" /> Bank
              <br />
            </p>
            <p className="subtitle is-size-6">Transfer NGN</p>
          </Transaction>
          <Transaction className="transaction">
            <p className="subtitle is-size-6">
              1.16 BTC <img src={transaction} alt="transaction-arrow" /> Bank
            </p>
            <p className="subtitle is-size-6"> 696152299929.23 NGN</p>
          </Transaction>
          <Transaction className="transaction">
            <p className="subtitle is-size-6">
              Amazon Card <img src={rightArrow} alt="transaction-arrow" /> Bank
            </p>
            <p className="subtitle is-size-6">Transfer NGN</p>
          </Transaction>
        </div>
      </div>
    </div>
    <img src={waveBottom} className="bottom-img" alt="wave" />
  </Container>
);

export default Hero;
