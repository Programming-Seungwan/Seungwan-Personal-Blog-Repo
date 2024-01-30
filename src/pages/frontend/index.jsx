import Layout from '../../components/Layout/layout.jsx';
import Seo from '../../components/seo.jsx';
import MainContent from '../../components/main-content/main-content.jsx';

export default function FrontendPage() {
  return (
    <Layout pageTitle='Frontend Development'>
      <MainContent pageCategory='frontend' />
    </Layout>
  );
}

export const Head = () => <Seo title='Frontend Development'></Seo>;
