import styled from 'styled-components';

import { Title, Subtitle } from './elements';
import map from '../assets/images/map.jpg';

const Container = styled.div`
    background-image:url('${map}');
`;

const Items = [
  {
    id: 1,
    title: 'ALL PARTICIPANTS',
    count: '6,024',
  },
  {
    id: 1,
    title: 'PARTICIPANTS HAVE EARNED ETH',
    count: '3,111.7806',
  },
  {
    id: 1,
    title: 'PARTICIPANTS HAVE EARNED USD',
    count: '1,192,216.49',
  },
];

const UserDetails = () => (
  <Container className="section">
    <div className="container">
      <div className="columns ">

      <div className="column">
              <div className="item">
                <div className="has-text-centered cards">
                  <Subtitle>fghfh</Subtitle>
                  <Title>hgnnhg</Title>
                </div>
              </div>
            </div>
      </div>
    </div>
  </Container>
);
export default UserDetails;
