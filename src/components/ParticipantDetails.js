import styled from 'styled-components';

import { Title, Subtitle } from './elements';
import waveBottom from '../assets/images/hero-bg2.png';

const Container = styled.div`
  background: ${props => props.theme.colorGradient};
  padding-top: 5rem;
  padding-bottom: 5rem;

  .item {
    border-radius: 1rem;
    background: ${props => props.theme.mainBrandColor};
    transition: all 0.5s ease;
    :hover {
      transform: scale(1.06);
    }
  }
  .cards {
    padding: 2rem 1.5rem;
  }
  .columns {
    justify-content: space-between;
  }
`;

const CardItems = [
  {
    id: 1,
    title: 'ALL PARTICIPANTS',
    count: '6,024',
  },
  {
    id: 2,
    title: 'PARTICIPANTS HAVE EARNED ETH',
    count: '3,111.7806',
  },
  {
    id: 3,
    title: 'PARTICIPANTS HAVE EARNED USD',
    count: '1,192,216.49',
  },
];

const ParticipantDetails = () => (
  <Container className="section">
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-5">
          <img src={waveBottom} className="bottom-img" alt="wave" />
        </div>
        <div className="column is-5">
          {CardItems.map(item => (
            <div className="column">
              <div className="item">
                <div className="has-text-centered cards">
                  <Subtitle>{item.title}</Subtitle>
                  <Title medium>{item.count}</Title>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
);
export default ParticipantDetails;
