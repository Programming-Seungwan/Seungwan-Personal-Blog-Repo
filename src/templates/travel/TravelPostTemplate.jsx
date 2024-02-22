import Layout from '../../components/Layout/layout';
import MainContent from '../../components/main-content/main-content';
import Seo from '../../components/seo';

export default function TravelPostTemplate({ pageContext }) {
  return (
    <Layout>
      <MainContent pageCategory='travelPost' postData={pageContext} />
    </Layout>
  );
}

export const Head = () => <Seo title='여행기' />;
