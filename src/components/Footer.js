import Link from 'next/link';
import styled from 'styled-components';

import { Subtitle } from './elements';
import Social from './Social';
import logo from '../assets/images/Logo.png';

const Container = styled.div`
  background: ${props => props.theme.primaryColor};
  .columns {
    justify-content: space-between;
  }
  .logo {
    height: 4rem;
  }
`;

const Footer = () => (
  <Container id="contact">
    <div className="section">
      <div className="container">
        <div className="columns is-vcentered has-text-centered-mobile">
          <div>
            <Link href="/">
              <a>
                <img className="logo" src={logo} alt="logo" />
              </a>
            </Link>
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
