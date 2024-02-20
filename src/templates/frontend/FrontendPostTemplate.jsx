import Layout from '../../components/Layout/layout';
import MainContent from '../../components/main-content/main-content';

export default function FrontendPostTemplate({ pageContext }) {
  return (
    <Layout>
      <MainContent pageCategory='frontendPost' postData={pageContext} />
    </Layout>
  );
}
