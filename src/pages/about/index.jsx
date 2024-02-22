import Layout from '../../components/Layout/layout.jsx';
import Seo from '../../components/seo.jsx';
import MainContent from '../../components/main-content/main-content.jsx';
import AboutMeHelmet from '../../components/pageHelmetComponent/aboutMeHelmet/AboutMeHelmet.jsx';

export default function AboutPage() {
  return (
    <Layout pageTitle='About Me'>
      <AboutMeHelmet />
      <MainContent pageCategory='about' />
    </Layout>
  );
}

export const Head = () => <Seo title='About me'></Seo>;
