/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';

import logo from '../assets/images/Logo.svg';
import Button from './elements/Button';

const Container = styled.div`
  background: ${props => props.theme.darkBlack};
  padding: 1rem 1.5rem;
  nav {
    background: ${props => props.theme.darkBlack};
  }
  .is-active {
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
  .nav-items {
    margin: auto 1.5rem;
  }
`;

const NavTitle = styled.div`
  align-items: center;
`;

const NavItems = [
  { id: 1, name: 'home', url: '/' },
  { id: 2, name: 'about', url: '/#about' },
  { id: 3, name: 'faq', url: '#faq' },
  { id: 4, name: 'Contact Us', url: '/#contact' },
];

const Header = () => {
  const [view, setView] = useState(false);

  const Menu = () => {
    setView(!view);
  };
  return (
    <Container className="section">
      <nav
        className="navbar container"
        role="navigation"
        aria-label="main navigation">
        <NavTitle className="navbar-brand">
          <Link href="/">
            <img src={logo} alt="logo" />
          </Link>
          <a
            role="button"
            className={`${
              view
                ? 'navbar-burger is-active has-text-white'
                : 'navbar-burger has-text-white'
            }`}
            aria-label="menu"
            aria-expanded="false"
            onClick={Menu}
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </NavTitle>
        <div
          id="navbarBasicExample"
          className={`${
            view ? 'navbar-menu is-active' : 'navbar-menu'
          } has-text-centered-mobile `}>
          <div className="navbar-start">
            {NavItems.map(item => (
              <a
                href={item.url}
                className="navbar-item has-text-weight-semibold nav-items is-uppercase"
                key={item.id}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="navbar-end">
            <div className="buttons">
              <Link href="/logIn">
                <Button>login</Button>
              </Link>
              <Link href="/register">
                <Button>SIGNUP</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
