import * as React from 'react';
import Layout from '../components/layout.jsx';
import Seo from '../components/seo.jsx';
import MainContent from '../components/main-content/main-content.jsx';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <MainContent pageCategory='home' />
    </Layout>
  );
};

export const Head = () => <Seo title='Home Page'></Seo>;

export default IndexPage;
