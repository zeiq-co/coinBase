import styled from 'styled-components';

import { Title, Subtitle } from './elements';
import topBg from '../assets/images/app-details-wave.svg';
import appleStore from '../assets/images/apple-store.svg';
import googleStore from '../assets/images/google-store.svg';

const Container = styled.div`
  background: ${props => props.theme.colorGradient};
  .section-top {
    padding: 0rem 1.5rem 5rem;
    background-image:url('${topBg}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
  }
  .apple-link {
    height: 4rem;
    margin: 1rem 1rem 0rem;
  }
  .google-link {
    height: 3rem;
    margin: 1rem 1rem 0rem;
  }
`;

const AppDetails = () => (
  <Container>
    <div className="section section-top">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5 has-text-centered">
            <Title>Download our app</Title>
            <Subtitle>
              Discover exclusive deals and discounts with our mobile experience.
            </Subtitle>
            <div className="buttons is-centered">
              <a>
                <img src={appleStore} className="apple-link" alt="wave" />
              </a>
              <a>
                <img src={googleStore} className="google-link" alt="wave" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8 has-text-centered "></div>
        </div>
      </div>
    </div>
  </Container>
);
export default AppDetails;
