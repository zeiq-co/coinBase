import styled from 'styled-components';

import { Title, Subtitle } from './elements';
import ethereum from '../assets/images/etherium.png';

const Container = styled.div`
  .item {
    flex: 1;
    border-radius: 0.75rem;
    background: ${(props) => props.theme.mainBrandColor};
    transition: all 0.5s ease;
    :hover {
      transform: scale(1.06);
      background: ${(props) => props.theme.primaryColor};
    }
  }
  .is-flex {
    justify-content: space-between;
  }
  p {
    font-size: 1.25rem !important;
  }
  img {
    height: 2.5rem;
  }
`;

const UserDetailsCard = ({ item }) => (
  <Container className="column is-3 is-flex">
    <div className="item px-4 py-5">
      <div className="is-flex is-uppercase pb-3">
        <img src={ethereum} alt="etherium" />
        <Subtitle>ID 2</Subtitle>
      </div>
      <div className="is-flex">
        <Subtitle>652146$</Subtitle>
        <Subtitle>89685eth</Subtitle>
      </div>
      <div className="bottom-item my-5">
        <Title medium>MOON X3</Title>
        <div className="is-flex">
          <Subtitle>5657$</Subtitle>
          <Subtitle>639eth</Subtitle>
        </div>
      </div>
      <div className="bottom-item my-5">
        <Title medium>MARS X4</Title>
        <div className="is-flex">
          <Subtitle>2657$</Subtitle>
          <Subtitle>345eth</Subtitle>
        </div>
      </div>
    </div>
  </Container>
);
export default UserDetailsCard;
