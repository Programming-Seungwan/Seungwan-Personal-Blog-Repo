import Layout from '../../components/Layout/layout';
import MainContent from '../../components/main-content/main-content';

export default function SportsPostTemplate({ pageContext }) {
  return (
    <Layout>
      <MainContent pageCategory='sportsPost' postData={pageContext} />
    </Layout>
  );
}
