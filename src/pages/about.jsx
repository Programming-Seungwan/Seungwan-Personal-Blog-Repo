import * as React from 'react';
import Layout from '../components/layout.jsx';
import Seo from '../components/seo.jsx';

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  );
};

export const Head = () => <Seo title='About me'></Seo>;

export default AboutPage;
