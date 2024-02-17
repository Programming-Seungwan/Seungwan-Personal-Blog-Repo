import Layout from '../../components/Layout/layout';
import MainContent from '../../components/main-content/main-content';

export default function TravelPostTemplate({ pageContext }) {
  console.log(pageContext);
  return (
    <Layout>
      <MainContent pageCategory='travelPost' />
    </Layout>
  );
}
