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
      <link rel='icon' href='/images/blog-favicon.png' type='imgae/png'></link>
    </>
  );
};

export default Seo;
