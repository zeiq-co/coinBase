import styled from 'styled-components';

import { Subtitle, Title } from './elements';

const Container = styled.div`
  background: ${props => props.theme.mainBrandColor};
  .section {
    padding: 4rem 1.5rem;
  }
  .columns {
    margin-top: 2rem;
  }
  .featured-card {
    background: ${props => props.theme.lightAccent};
    padding: 1rem 1.5rem;
    border-radius: 15px;
    transition: all 0.5s ease;
    :hover {
      transform: scale(1.06);
    }
  }
  p {
    line-height: 27px !important;
  }
`;

const featureCards = [
  {
    id: 1,
    title: 'ZERO RISK',
    subtitle:
      'Our developers deployed a self-executing smart contract on the Ethereum Blockchain that exists in perpetuity and cannot be modified by any entity.',
  },
  {
    id: 2,
    title: 'INSTANT TRANSACTIONS',
    subtitle:
      'The profit routes from other members directly into your personal wallet. There is no hoarding in the system, the income belongs only to you',
  },
  {
    id: 3,
    title: 'IMMUTABILITY OF CONDITIONS',
    subtitle:
      'The Ethflix smart contract is nothing more than a payment gateway that facilitates peer-to-peer commission payments between its participants.',
  },
  {
    id: 4,
    title: 'DECENTRALIZATION',
    subtitle:
      'There are no managers or administrators, there are only the creators who are equal participants in the project, like everyone else',
    grid: true,
  },
  {
    id: 5,
    title: 'TRANSPARENCY & ANONYMITY',
    subtitle:
      'The smart contract is public. Anyone can see the code and the entire transaction history. This guarantees the integrity of the system.',
  },
  {
    id: 6,
    title: '100% ONLINE',
    subtitle:
      'All funds are transferred between members, there are no hidden fees. The contract balance is always zero',
  },
];

const Features = () => (
  <Container>
    <div className="section container has-text-centered">
      <Title white>International next-gen crowdfunding platform</Title>
      <Subtitle>
        Decentralized marketing is powered by the revolutionary smart contract
        technology*. The code for Forsage’s smart contract can be seen here
        fully open, so you can be completely confident in the security and
        long-term operation of the project
      </Subtitle>
      <div className="columns is-multiline is-variable is-6 section">
        {featureCards.map(item => (
          <div
            className={`column has-text-left is-half ${!item.grid &&
              'is-flex'}`}>
            <div className="featured-card">
              <Title
                medium
                white
                className="is-size-5-mobile has-text-weight-bold">
                {item.title}
              </Title>
              <Subtitle>{item.subtitle}</Subtitle>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Container>
);

export default Features;
