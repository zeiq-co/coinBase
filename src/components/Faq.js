import styled from 'styled-components';

import { Title } from './elements';
import FaqItem from './FaqItem';
import waveBottom from '../assets/images/faq-bottom-wave.svg';

const Container = styled.div`
  background: ${props => props.theme.primaryColor};
  padding: 1rem 0rem;
  .has-text-left {
    margin-top: 2rem;
  }
`;

const faq = [
  {
    id: 1,
    title: 'WHAT IS ethflix?',
    subtitle:
      'Ethflix is an international next-gen crowdfunding platform and the first in the history of matrix marketing based on Ethereum smart contracts.',
  },
  {
    id: 2,
    title: 'WHAT IS ETHEREUM?',
    subtitle:
      'Ethereum (ETH) is one of the leading cryptocurrency, which has existed since 2015. At the same time, it is a software framework for the DeFi (decentralized finance) market, since the blockchain of this crypto currency allows you not only to follow the history of transactions, but also to save any executable software products (smart contracts). A huge number of major crypto companies use this platform.',
  },
  {
    id: 3,
    title: 'WHAT IS DECENTRALIZATION?',
    subtitle:
      'The process works based on distributing authority from a centralized administration to the participants involved in the process. Unlike a centralized system, all decisions are made by consensus.',
  },
  {
    id: 4,
    title: 'WHO MANAGES THE PLATFORM?',
    subtitle:
      'The Ethflix platform consists of self-executing trades, which do not permit anyone to interfere with the course of the transactions.',
  },
  {
    id: 5,
    title: 'WHAT DO I NEED TO DO IN ORDER TO JOIN THE COMMUNITY?',
    subtitle:
      'You already have almost everything you need. All that remains is to install on your device (smartphone, tablet, PC) a crypto wallet and Telegram tlgrm.ru',
  },
  {
    id: 6,
    title: 'DO LEVELS HAVE A VALIDITY PERIOD?',
    subtitle:
      'No. Purchasing any level in the program occurs one time and lasts forever. Levels do not have a validity period.This distinguishes the Forsage platform from other projects, which require repeated payments.',
  },
];

const Faq = () => (
  <Container id="faq">
    <div className="section container">
      <div className="columns is-centered">
        <div className="column is-10 has-text-centered">
          <Title dark>Frequently Asked Questions</Title>
          <div className="has-text-left">
            {faq.map(item => (
              <FaqItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default Faq;
