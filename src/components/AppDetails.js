import styled from 'styled-components';

import { Title, Subtitle } from './elements';
import background from '../assets/images/app-detailBg.jpg';
import appleStore from '../assets/images/apple-store.svg';
import googleStore from '../assets/images/google-store.svg';
import appSplash from '../assets/images/mobile-1.svg';
import appDetails from '../assets/images/mobile-2.svg';

const Container = styled.div`
  padding: 1rem 0rem;
  background-image:url('${background}');
  background-position: center;
  @media only screen and (max-width: 767px) {
    background-position: inherit;
  }
  .top {
    padding: 3rem 1.5rem 1rem;
  }
  .apple-link {
    height: 4rem;
    margin: 1rem 1rem 0rem;
  }
  .google-link {
    height: 3rem;
    margin: 1rem 1rem 0rem;
  }
  .app-img {
    margin: 1rem;
  }
`;

const AppDetails = () => (
  <Container>
    <div className="section top">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5 has-text-centered">
            <Title white>Download our app</Title>
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
        <div className="columns is-centered has-text-centered">
          <img src={appSplash} className="app-img" alt="mobile-mokeUp" />
          <img src={appDetails} className="app-img" alt="app-img" />
        </div>
      </div>
    </div>
  </Container>
);
export default AppDetails;
