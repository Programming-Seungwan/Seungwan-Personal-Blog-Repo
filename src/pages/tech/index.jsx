import Layout from '../../components/Layout/layout.jsx';
import Seo from '../../components/seo.jsx';
import MainContent from '../../components/main-content/main-content';
import TechHelmet from '../../components/pageHelmetComponent/techHelmet/TechHelmet.jsx';

export default function TechPage() {
  return (
    <Layout>
      <TechHelmet />
      <MainContent pageCategory='tech' />
    </Layout>
  );
}

export const Head = () => <Seo title='Tech & Computer Science'></Seo>;
