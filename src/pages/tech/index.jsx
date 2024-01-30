import Layout from '../../components/Layout/layout.jsx';
import Seo from '../../components/seo.jsx';
import MainContent from '../../components/main-content/main-content';

export default function TechPage() {
  return (
    <Layout>
      <MainContent pageCategory='tech' />
    </Layout>
  );
}

export const Head = () => <Seo title='Tech & Computer Science'></Seo>;
