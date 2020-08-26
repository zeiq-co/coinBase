import styled from 'styled-components';
import Link from 'next/link';

import Button from './elements/Button';
import logo from '../assets/images/Logo.png';

const Container = styled.div`
  padding: 1rem 0.5rem;
  .navbar {
    background: transparent;
    align-items: center;
    justify-content: space-between;
  }
  img {
    height: 6rem;
  }
  .nav-item {
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
  .is-flex {
    align-items: center;
    justify-content: flex-end;
  }
`;

const CustomerHeader = () => (
  <Container className="container">
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a>
            <img src={logo} alt="logo" />
          </a>
        </Link>
      </div>
      <div>
        <div className="navbar-end is-flex">
          <a className="navbar-item has-text-weight-semibold is-uppercase nav-item">
            Dashboard
          </a>
          <div className="navbar-item has-text-weight-semibold is-uppercase dropdown is-hoverable">
            <div className="dropdown-trigger">
              <a className="navbar-item has-text-weight-semibold is-uppercase nav-item">
                Office
              </a>
            </div>
            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <a className="navbar-item has-text-weight-semibold is-uppercase nav-item">
                    Partners
                  </a>
                  <a className="navbar-item has-text-weight-semibold  is-uppercase nav-item">
                    Statistics
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Button>Logout</Button>
        </div>
      </div>
    </nav>
  </Container>
);

export default CustomerHeader;
