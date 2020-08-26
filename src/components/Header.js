/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';

import logo from '../assets/images/Logo.png';
import Button from './elements/Button';

const Container = styled.div`
  background: ${props => props.theme.primaryColor};
  padding: 1rem 1.5rem;
  nav {
    background: ${props => props.theme.primaryColor};
  }
  .is-active {
    background: ${props => props.theme.primaryColor};
  }
  .navbar-end {
    margin-left: 0;
  }
  .navbar-start {
    margin-right: 0;
    flex: 1;
    justify-content: center;
  }
  .navbar-item {
    background: ${props => props.theme.primaryColor};
    :hover {
      border-bottom: 2px solid #00ece2;
      background: ${props => props.theme.primaryColor};
    }
    :focus {
      background: ${props => props.theme.primaryColor};
    }
  }
  .nav-items {
    margin: auto 1.5rem;
  }
  img {
    height: 3.5rem;
  }
`;

const NavTitle = styled.div`
  align-items: center;
`;

const NavItems = [
  { id: 1, name: 'home', url: '/' },
  { id: 2, name: 'about', url: '/#about' },
  { id: 3, name: 'faq', url: '/#faq' },
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
            <a>
              <img src={logo} alt="logo" />
            </a>
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
              <Link href={item.url} key={item.id}>
                <a className="navbar-item has-text-weight-semibold nav-items is-uppercase has-text-white">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="navbar-end">
            <div className="buttons">
              <Link href="/logIn">
                <Button secondary>login</Button>
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
