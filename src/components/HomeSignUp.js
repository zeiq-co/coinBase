import styled from 'styled-components';

import { Subtitle, Title, Button } from './elements';

const Container = styled.div`
  padding: 1rem 0 2rem;
  background: ${props => props.theme.darkBlack};
  .bottom {
    background: ${props => props.theme.colorGradient};
    border-radius: 10px;
  }
  input {
    height: 54px;
  }
  .control {
    margin: 1rem 0rem;
  }
`;

const HomeSignUp = () => (
  <Container>
    <div className="section container">
      <div className="columns is-vcentered is-centered">
        <div className="column is-5 has-text-centered">
          <Title>Subscribe our newsletter</Title>
          <Subtitle>
            Subscribe to our newsletter for daily/weekly update of our products
            and services.
          </Subtitle>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-9 has-text-centered">
          <div className="section  bottom columns is-centered">
            <div className="column is-9">
              <div className="field is-grouped is-block-mobile">
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
