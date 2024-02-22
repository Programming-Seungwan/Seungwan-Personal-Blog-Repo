import Layout from '../../components/Layout/layout';
import MainContent from '../../components/main-content/main-content';
import Seo from '../../components/seo';

export default function TechPostTemplate({ pageContext }) {
  return (
    <Layout>
      <MainContent pageCategory='techPost' postData={pageContext} />
    </Layout>
  );
}

export const Head = () => <Seo title='개발 전반' />;
