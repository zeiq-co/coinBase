import groq from 'groq';
import axios from 'axios';
import { NextSeo } from 'next-seo';

import sanity from '../utils/sanity';
import Layout from '../components/Layout';
import { Subtitle, Title, Button } from '../components/elements';

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
      <NextSeo title="CoinBase" description="A short description goes here." />
      <section className="section">
        <Button secondary>dcd</Button>
        <Subtitle>vbhjxhj</Subtitle>
        <Title>jhasvcjchjk fjdjfd gj</Title>
      </section>
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
