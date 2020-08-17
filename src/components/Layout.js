import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div``;
export default ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);
