import Link from 'next/link';
import styled from 'styled-components';

import logo from '../assets/images/logo.png';

const Container = styled.div`
  background: ${props => props.theme.darkBlack};
  nav {
    background: ${props => props.theme.darkBlack};
  }
`;

const NavTitle = styled.div`
  align-self: center;
  a {
    font-weight: 900;
    :hover {
      color: #000;
    }
  }
`;

export default () => (
  <Container>
    <nav
      className="navbar container"
      role="navigation"
      aria-label="main navigation">
      <NavTitle className="navbar-brand">
        <Link href="/">
          <a className="navbar-item  is-size-4">
            <img src={logo} alt="logo" />
          </a>
        </Link>
      </NavTitle>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/about">
            <a className="navbar-item">About </a>
          </Link>
        </div>
      </div>
    </nav>
  </Container>
);
