import Layout from '../../components/Layout/layout';
import MainContent from '../../components/main-content/main-content';

export default function SportsPostTemplate({ pageContext }) {
  console.log(pageContext);
  return (
    <Layout>
      <MainContent pageCategory='sportsPost' />
    </Layout>
  );
}
