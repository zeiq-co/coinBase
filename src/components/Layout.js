import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import CustomerHeader from './CustomerHeader';

const Container = styled.div``;
export default ({ children, userDashboard }) => (
  <Container>
    {userDashboard ? <CustomerHeader /> : <Header />}
    {children}
    <Footer />
  </Container>
);
