import styled from 'styled-components';
import { Subtitle, Title } from './elements';
import Social from './Social';

const Container = styled.div`
  background: ${props => props.theme.darkBlack};
  .columns {
    justify-content: space-between;
  }
`;
const Line = styled.div`
  background: ${props => props.theme.colorGradient};
  height: 3px;
  border-radius: 5px;
  margin-bottom: 2rem;
`;

const Footer = () => (
  <Container className="">
    <div className="section">
      <Line />
      <div className="container">
        <div className="columns is-vcentered has-text-centered-mobile">
          <div>
            <Title>ETHFLIX</Title>
            <Subtitle>
              Smart-contract address: <a>#d3348f36077d003f00fFB97</a>
            </Subtitle>
          </div>
          <div>
            <Social />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Footer;
