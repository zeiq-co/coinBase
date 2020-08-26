import styled from 'styled-components';

import { Title, Subtitle } from './elements';

const Container = styled.div`
  margin-top: 2rem;
  .item {
    border-radius: 1rem;
    background: red;
  }
`;

const CardItems = [
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

const ParticipantDetails = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        {CardItems.map(item => (
          <div className="column">
            <div className="item">
              <div className="section has-text-centered">
                <Subtitle>{item.title}</Subtitle>
                <Title>{item.count}</Title>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Container>
);
export default ParticipantDetails;
