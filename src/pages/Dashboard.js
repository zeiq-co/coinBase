import { NextSeo } from 'next-seo';
import styled from 'styled-components';

import Layout from '../components/Layout';
import ParticipantDetails from '../components/ParticipantDetails';

const Dashboard = () => {
  return (
    <Layout userDashboard>
      <NextSeo title="Dashboard" description="Ethflix Decentralized Matrix" />
        <ParticipantDetails />
    </Layout>
  );
};

export default Dashboard;
