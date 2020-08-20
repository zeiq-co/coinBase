import styled from 'styled-components';
import telegram from '../assets/images/telegram.svg';
import mail from '../assets/images/mail.svg';
import youtube from '../assets/images/youtube.svg';

const Container = styled.div`
  img {
    height: 50px;
  }
  a {
    margin: 0.75rem;
  }
`;

const Item = [
  {
    id: 1,
    icon: telegram,
    link: '/',
  },
  {
    id: 2,
    icon: mail,
    link: '/',
  },
  {
    id: 3,
    icon: youtube,
    link: '/',
  },
];

const Social = () => (
  <Container className="flex">
    {Item.map((item) => (
      <a href={item.link} key={item.id}>
        <img src={item.icon} alt="social-icons" />
      </a>
    ))}
  </Container>
);

export default Social;
