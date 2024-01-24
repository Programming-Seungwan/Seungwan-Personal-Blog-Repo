import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { sportsUl } from './index.module.css';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function SportsMainContentPosts() {
  const dataArray = useStaticQuery(graphql`
    query MyQuery {
      allContentfulSeungwanBlogSportsPost {
        edges {
          node {
            slug
            updatedAt(formatString: "YYYY-MM-DD")
            sportsPostContent {
              raw
            }
          }
        }
      }
    }
  `).allContentfulSeungwanBlogSportsPost.edges;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      // Add other mark renderers as needed
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      // Add other node renderers as needed
    },
  };

  return (
    <>
      <ul className={sportsUl}>
        {dataArray.map((data) => {
          const postContent = JSON.parse(data.node.sportsPostContent.raw);
          return <div>{documentToReactComponents(postContent, options)}</div>;
        })}
      </ul>
    </>
  );
}
