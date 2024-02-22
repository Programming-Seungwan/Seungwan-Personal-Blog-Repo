import Layout from '../../components/Layout/layout.jsx';
import Seo from '../../components/seo.jsx';
import MainContent from '../../components/main-content/main-content';
import TravelHelmet from '../../components/pageHelmetComponent/travelHelmet/TravelHelmet.jsx';

export default function TravelPage() {
  return (
    <Layout>
      <TravelHelmet />
      <MainContent pageCategory='travel' />
    </Layout>
  );
}

export const Head = () => <Seo title='Travel, Why I live'></Seo>;
