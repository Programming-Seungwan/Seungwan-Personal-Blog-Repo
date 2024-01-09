import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt='This is seungwan photo' src='../images/seungwan.JPG' />
    </Layout>
  );
};

export const Head = () => <Seo title='Home Page'></Seo>;

export default IndexPage;
