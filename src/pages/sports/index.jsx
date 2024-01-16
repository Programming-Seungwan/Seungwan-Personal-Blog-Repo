import * as React from 'react';
import Layout from '../../components/Layout/layout.jsx';
import Seo from '../../components/seo.jsx';
import MainContent from '../../components/main-content/main-content';

export default function SportsPage() {
  return (
    <Layout pageTitle='Sports'>
      <MainContent pageCategory='sports' />
    </Layout>
  );
}

export const Head = () => <Seo title='Sports, my happiness'></Seo>;
