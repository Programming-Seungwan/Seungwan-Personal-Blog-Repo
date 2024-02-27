import { graphql, useStaticQuery } from 'gatsby';

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <title>
        {data.site.siteMetadata.title} | {title}
      </title>
      <link rel='icon' href='/images/blog-favicon.png' type='image/png'></link>
      <meta name='google-site-verification' content='tKu4ILqPM0TqYRzh-5YD4bXG5GBEqn8KEWtXxwdl5Sk' />
    </>
  );
};

export default Seo;
