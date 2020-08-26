import { NextSeo } from 'next-seo';
import styled from 'styled-components';

import Layout from '../components/Layout';
import ParticipantDetails from '../components/ParticipantDetails';
import background from '../assets/images/body-bg.png';

const Container = styled.div`
background-image:url('${background}');
`;

const Dashboard = () => {
  return (
    <Layout userDashboard>
      <NextSeo title="Dashboard" description="Ethflix Decentralized Matrix" />
      <Container>
        <ParticipantDetails />
      </Container>
    </Layout>
  );
};

export default Dashboard;
