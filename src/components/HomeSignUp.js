import styled from 'styled-components';

import { Subtitle, Title, Button } from './elements';

const Container = styled.div`
  padding: 0 0 2.5rem;
  background: ${props => props.theme.gradientSecondary};
  .bottom {
    background: ${props => props.theme.mainBrandColor};
    border-radius: 10px;
    margin-top: 0.5rem;
  }
  input,
  button {
    height: 54px;
  }
  .control {
    margin: 1rem 0rem;
  }
  .is-grouped {
    @media only screen and (max-width: 767px) {
      display: block;
    }
  }
  .control {
    @media only screen and (max-width: 767px) {
      margin-right: 0rem !important;
    }
  }
`;

const HomeSignUp = () => (
  <Container>
    <div className="section container">
      <div className="columns is-vcentered is-centered">
        <div className="column is-7 has-text-centered">
          <Title white>Subscribe our newsletter</Title>
          <Subtitle>
            Subscribe to our newsletter for update of our services.
          </Subtitle>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-9 has-text-centered">
          <div className="section  bottom columns is-centered">
            <div className="column is-9">
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    className="input is-rounded"
                    type="text"
                    placeholder="Enter Your Email"
                  />
                </p>
                <p className="control">
                  <Button secondary>DISCOVER</Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default HomeSignUp;
