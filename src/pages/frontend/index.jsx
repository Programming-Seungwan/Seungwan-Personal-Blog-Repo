import * as React from 'react';
import Layout from '../../components/Layout/layout.jsx';
import MainContent from '../../components/main-content/main-content';

export default function FrontendPage() {
  return (
    <Layout>
      <MainContent pageCategory='frontend' />
    </Layout>
  );
}
