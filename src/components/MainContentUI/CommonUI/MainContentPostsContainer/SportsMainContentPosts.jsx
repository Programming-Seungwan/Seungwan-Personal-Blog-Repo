import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { sportsUl } from './index.module.css';

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

  return (
    <>
      <ul className={sportsUl}>
        {dataArray.map((data) => {
          return <div>{data.node.sportsPostContent.raw}</div>;
        })}
      </ul>
    </>
  );
}
