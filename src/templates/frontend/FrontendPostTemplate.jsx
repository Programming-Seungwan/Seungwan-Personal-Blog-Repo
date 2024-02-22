import Layout from '../../components/Layout/layout';
import MainContent from '../../components/main-content/main-content';
import Seo from '../../components/seo';
import FrontendPostHelmet from '../../components/pageHelmetComponent/detailPostHelmet/frontendPostHelmet/FrontendPostHelmet';

export default function FrontendPostTemplate({ pageContext }) {
  return (
    <Layout>
      <FrontendPostHelmet pageContext={pageContext} />
      <MainContent pageCategory='frontendPost' postData={pageContext} />
    </Layout>
  );
}

export const Head = () => <Seo title='프론트엔드 성장' />;
