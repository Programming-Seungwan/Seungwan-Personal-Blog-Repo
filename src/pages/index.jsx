import * as React from 'react';
import Layout from '../components/layout.jsx';
import Seo from '../components/seo.jsx';

const IndexPage = () => {
  return <Layout pageTitle='Home Page'></Layout>;
};

export const Head = () => <Seo title='Home Page'></Seo>;

export default IndexPage;
