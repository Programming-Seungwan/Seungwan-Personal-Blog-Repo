import * as React from 'react';
import Layout from '../../components/Layout/layout.jsx';
import Seo from '../../components/seo.jsx';
import MainContent from '../../components/main-content/main-content';

export default function TravelPage() {
  return (
    <Layout>
      <MainContent pageCategory='travel' />
    </Layout>
  );
}

export const Head = () => <Seo title='Travel, Why I live'></Seo>;
