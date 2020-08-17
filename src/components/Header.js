/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import styled from 'styled-components';

import logo from '../assets/images/logo.png';
import Button from './elements/Button';

const Container = styled.div`
  background: ${props => props.theme.darkBlack};
  padding: 1rem 1.5rem;
  nav {
    background: ${props => props.theme.darkBlack};
  }
  .navbar-item {
    background: ${props => props.theme.colorGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    :hover {
      background: ${props => props.theme.colorGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      border-bottom: 2px solid #fd749b;
    }
  }
  .navbar-end {
    margin-left: 0;
  }
  .navbar-start {
    margin-right: 0;
    flex: 1;
    justify-content: center;
  }
  a {
    margin: auto 1.5rem;
  }
`;

const NavTitle = styled.div`
  align-items: center;
  img {
    height: 2rem;
  }
`;

const NavItems = [
  { id: 1, name: 'home', url: '/' },
  { id: 2, name: 'about', url: '/' },
  { id: 3, name: 'blog', url: '/' },
  { id: 4, name: 'Contact Us', url: '/' },
];

export default () => (
  <Container className="section">
    <nav
      className="navbar container"
      role="navigation"
      aria-label="main navigation">
      <NavTitle className="navbar-brand">
        <Link href="/">
          <img src={logo} alt="logo" width="142" />
        </Link>
        <a
          role="button"
          className="navbar-burger burger has-text-white"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </NavTitle>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {NavItems.map(item => (
            <a
              href={item.url}
              className="navbar-item has-text-weight-semibold"
              key={item.id}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="navbar-end">
          <Button>login</Button>
        </div>
      </div>
    </nav>
  </Container>
);
