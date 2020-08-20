import groq from 'groq';
import axios from 'axios';
import { NextSeo } from 'next-seo';

import sanity from '../utils/sanity';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import HomeVideo from '../components/HomeVideo';
import Features from '../components/Features';
import PartnerResults from '../components/PartnerResults';
import Faq from '../components/Faq';
import AppDetails from '../components/AppDetails';

function Index(props) {
  const { degrees = [], universities = [] } = props;
  console.log('data', degrees, universities);

  const handleContact = () => {
    console.log('handleContact');
    axios
      .post('/api/contact', {
        firstName: 'Fred',
        lastName: 'Flintstone',
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <NextSeo title="Ethflix" description="A short description goes here." />
      <Hero />
      <HomeVideo />
      <Features />
      <PartnerResults />
      <Faq />
      <AppDetails />
    </Layout>
  );
}

Index.getInitialProps = async () => ({
  degrees: await sanity.fetch(groq`
    *[_type == "degree"]|order(publishedAt desc)
  `),
  universities: await sanity.fetch(groq`
    *[_type == "university"]|order(publishedAt desc)
  `),
});

export default Index;
