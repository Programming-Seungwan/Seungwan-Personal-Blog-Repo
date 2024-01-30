import Layout from '../components/Layout/layout.jsx';
import Seo from '../components/seo.jsx';
import MainContent from '../components/main-content/main-content.jsx';

export default function IndexPage() {
  return (
    <Layout pageTitle='Home Page'>
      <MainContent pageCategory='home' />
    </Layout>
  );
}

export const Head = () => <Seo title='Home Page'></Seo>;
