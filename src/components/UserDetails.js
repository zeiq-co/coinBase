import styled from 'styled-components';
import Particles from 'react-particles-js';

import UserDetailsCard from './UserDetailsCard';

const Container = styled.div`
  background: ${props => props.theme.gradientSecondary};
  .item {
    flex: 1;
    border-radius: 0.75rem;
    background: ${props => props.theme.mainBrandColor};
    transition: all 0.5s ease;
    :hover {
      transform: scale(1.06);
      background: ${props => props.theme.primaryColor};
    }
  }
  .cards {
    padding: 2rem 1.5rem;
  }
`;

const StyledParticles = styled(Particles)`
  .tsparticles-canvas-el {
    position: absolute;
  }
`;

const Items = [
  {
    id: 1,
    title: 'ALL PARTICIPANTS',
    count: '6,024',
  },
  {
    id: 1,
    title: 'PARTICIPANTS HAVE EARNED ETH',
    count: '3,111.7806',
  },
  {
    id: 1,
    title: 'PARTICIPANTS HAVE EARNED USD',
    count: '1,192,216.49',
  },
  {
    id: 1,
    title: 'PARTICIPANTS HAVE EARNED USD',
    count: '1,192,216.49',
  },
];

const UserDetails = () => (
  <>
    <StyledParticles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: 'top',
            out_mode: 'out',
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
    <Container className="section">
      <div className="container py-5">
        <div className="columns ">
          {Items.map(item => (
            <UserDetailsCard key={item.id} />
          ))}
        </div>
      </div>
    </Container>
  </>
);
export default UserDetails;
