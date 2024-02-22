import Layout from '../../components/Layout/layout';
import MainContent from '../../components/main-content/main-content';
import Seo from '../../components/seo';

export default function SportsPostTemplate({ pageContext }) {
  return (
    <Layout>
      <MainContent pageCategory='sportsPost' postData={pageContext} />
    </Layout>
  );
}

export const Head = () => <Seo title='운동을 하며 느낀 것들' />;
