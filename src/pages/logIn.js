import groq from 'groq';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import Particles from 'react-particles-js';
import styled from 'styled-components';

import sanity from '../utils/sanity';
import Layout from '../components/Layout';
import AuthorizationForm from '../components/AuthorizationForm';

const StyledParticles = styled(Particles)`
  .tsparticles-canvas-el {
    position: absolute;
  }
`;

const Container = styled.div`
  background: ${props => props.theme.primaryColor};
`;

const logIn = () => {
  return (
    <Layout>
      <NextSeo
        title="LogIn"
        description="A matrix platform smart contract Ethereum"
      />
      <Container>
        <StyledParticles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />
        <div className="section container">
          <div className="columns is-centered">
            <div className="column is-7 has-text-centered">
              <AuthorizationForm title="LOGIN" />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default logIn;
