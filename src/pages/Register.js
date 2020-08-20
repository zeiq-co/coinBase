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

const Register = () => {
  return (
    <Layout>
      <NextSeo
        title="Authorization"
        description="A matrix platform smart contract Ethereum"
      />
      <>
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
              <AuthorizationForm title="REGISTRATION" />
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Register;
