import Layout from '../../components/Layout/layout.jsx';
import Seo from '../../components/seo.jsx';
import MainContent from '../../components/main-content/main-content';
import SportsHelmet from '../../components/pageHelmetComponent/sportsHelmet/SportsHelmet.jsx';

export default function SportsPage() {
  return (
    <Layout pageTitle='Sports'>
      <SportsHelmet />
      <MainContent pageCategory='sports' />
    </Layout>
  );
}

export const Head = () => <Seo title='Sports, my happiness'></Seo>;
