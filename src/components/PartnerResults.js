import styled from 'styled-components';
import Slider from 'react-slick';

import { Subtitle, Title } from './elements';
import PartnerCard from './PartnerCard';

const Container = styled.div`
  background: ${(props) => props.theme.darkBlack};
`;

const partners = [
  {
    id: 1,
    userId: '181',
    joins: '66',
    usdBalance: '76572',
    ethBalance: '776.77',
    fourXBalance: '76565',
    fiveXBalance: '6556.8',
  },
  {
    id: 2,
    userId: '89',
    joins: '15',
    usdBalance: '3547',
    ethBalance: '555.77',
    fourXBalance: '67565',
    fiveXBalance: '7556.89',
  },
  {
    id: 3,
    userId: '107',
    joins: '99',
    usdBalance: '87657',
    ethBalance: '666.77',
    fourXBalance: '87567',
    fiveXBalance: '7556',
  },
  {
    id: 4,
    userId: '177',
    joins: '100',
    usdBalance: '6688',
    ethBalance: '556.77',
    fourXBalance: '5577',
    fiveXBalance: '4556.22',
  },
  {
    id: 5,
    userId: '200',
    joins: '77',
    usdBalance: '56572',
    ethBalance: '476.77',
    fourXBalance: '46565',
    fiveXBalance: '5556.8',
  },
  {
    id: 6,
    userId: '189',
    joins: '89',
    usdBalance: '70052',
    ethBalance: '803.77',
    fourXBalance: '7655.55',
    fiveXBalance: '6556.8',
  },
];

const PartnerResults = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <div className="section container">
        <div className="columns is-centered">
          <div className="column is-9 has-text-centered">
            <Title>Partner results</Title>
            <Subtitle>
              All data is stored on the blockchain in the public domain and can
              be verified!
            </Subtitle>
            <a>Contract address: 0x5acc84a3e955Bdd76467d0fFB97</a>
          </div>
        </div>
        <Slider {...settings}>
          {partners.map((item) => (
            <PartnerCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </Container>
  );
};
export default PartnerResults;
