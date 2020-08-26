import styled from 'styled-components';
import { Title } from './elements';

import ethereum from '../assets/images/etherium.png';

const Container = styled.div`
  margin: 1rem;
  .wrapper {
    background: ${props => props.theme.lightAccent};
    padding: 1rem;
    border-radius: 10px;
  }
  img {
    height: 50px;
  }
  .top {
    justify-content: space-between;
  }
  .bottom {
    margin-top: 1.5rem;
  }
  .bottom-item {
    margin-bottom: 1.5rem;
  }
  .eth {
    margin-left: 1rem;
    align-self: center;
  }
`;

const Icon = styled.i`
  margin-right: 1rem;
  margin-top: 7px;
`;
const PartnerCard = ({ item }) => (
  <Container className="has-text-white">
    <div className="wrapper">
      <div className="is-flex top">
        <img src={ethereum} alt="ethereum" />
        <div>
          <h5 className="is-5 has-text-right has-text-weight-bold">
            ID {item.userId}
          </h5>
          <h5 className="is-5 has-text-right has-text-weight-bold">
            <i className="fas fa-users"></i> {item.joins}
          </h5>
        </div>
      </div>
      <div className="bottom">
        <div className="is-flex bottom-item">
          <Icon className="fas fa-circle"></Icon>
          <div>
            <h4 className="is-size-5 has-text-weight-bold has-text-white">Balance in USD</h4>
            <Title medium>${item.usdBalance}</Title>
          </div>
        </div>
        <div className="is-flex bottom-item">
          <Icon className="fas fa-circle"></Icon>
          <div>
            <h4 className="is-size-5 has-text-weight-bold">ETH balance</h4>
            <p className="is-size-5 is-flex">
              <Title medium>${item.ethBalance}</Title>
              <p className="eth">ETH</p>
            </p>
          </div>
        </div>
        <div className="is-flex bottom-item">
          <Icon className="fas fa-circle"></Icon>
          <div>
            <h4 className="is-size-5 has-text-weight-bold">Ethflix 4X</h4>
            <p className="is-size-5 is-flex">
              <Title medium>${item.fourXBalance}</Title>
              <p className="eth">ETH</p>
            </p>
          </div>
        </div>
        <div className="is-flex bottom-item">
          <Icon className="fas fa-circle"></Icon>
          <div>
            <h4 className="is-size-5 has-text-weight-bold">Ethflix 5X</h4>
            <p className="is-size-5 is-flex">
              <Title medium>${item.fiveXBalance}</Title>
              <p className="eth">ETH</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default PartnerCard;
