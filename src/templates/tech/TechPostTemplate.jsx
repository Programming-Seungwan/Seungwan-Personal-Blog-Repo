import Layout from '../../components/Layout/layout';
import MainContent from '../../components/main-content/main-content';

export default function TechPostTemplate({ pageContext }) {
  return (
    <Layout>
      <MainContent pageCategory='techPost' postData={pageContext} />
    </Layout>
  );
}
