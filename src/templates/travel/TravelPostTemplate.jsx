import Layout from '../../components/Layout/layout';
import MainContent from '../../components/main-content/main-content';
import Seo from '../../components/seo';
import TravelPostHelmet from '../../components/pageHelmetComponent/detailPostHelmet/travelPostHelmet/TravelPostHelmet';

export default function TravelPostTemplate({ pageContext }) {
  return (
    <Layout>
      <TravelPostHelmet pageContext={pageContext} />
      <MainContent pageCategory='travelPost' postData={pageContext} />
    </Layout>
  );
}

export const Head = () => <Seo title='여행기' />;
