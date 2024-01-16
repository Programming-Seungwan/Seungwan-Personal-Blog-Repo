import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout/layout.jsx';
import Seo from '../../components/seo.jsx';

const BlogPost = ({ data, children }) => {
  // getImage 함수는 복잡하게 객체 속성 다 파고갈 필요 없이 이미지를 얻어오게 도와준다
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle='Super Cool Blog Posts'>
      <p>Posted : {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{' '}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>{data.mdx.frontmatter.hero_image_credit_text}</a>
      </p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
