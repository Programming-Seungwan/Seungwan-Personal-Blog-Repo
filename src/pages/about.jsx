import * as React from 'react';
import Layout from '../components/layout.jsx';
import Seo from '../components/seo.jsx';
import MainContent from '../components/main-content/main-content.jsx';

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <MainContent pageCategory='about me' />
    </Layout>
  );
};

export const Head = () => <Seo title='About me'></Seo>;

export default AboutPage;
