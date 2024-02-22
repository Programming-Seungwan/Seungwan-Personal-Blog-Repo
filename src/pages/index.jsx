import Layout from '../components/Layout/layout.jsx';
import Seo from '../components/seo.jsx';
import MainContent from '../components/main-content/main-content.jsx';
import HomeHelmet from '../components/pageHelmetComponent/homeHelmet/HomeHelmet.jsx';

export default function IndexPage() {
  return (
    <Layout pageTitle='Home Page'>
      <HomeHelmet />
      <MainContent pageCategory='home' />
    </Layout>
  );
}

export const Head = () => <Seo title='Seungan Life Record'></Seo>;
