import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { sportsUl } from './index.module.css';
import PostThumbNailCardUI from '../PostThumbNailCardUI/PostThumbNailCardUI';

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
            tagsJson {
              tags
            }
            writtenTime(formatString: "YYYY-MM-DD")
            thumbnailImage {
              gatsbyImageData
            }
            title
          }
        }
      }
    }
  `).allContentfulSeungwanBlogSportsPost.edges;

  return (
    <>
      <ul className={sportsUl}>
        {dataArray.map((data) => {
          const title = data.node.title;
          const writtenTime = data.node.writtenTime;
          const thumbnailImageSrc = data.node.thumbnailImage.gatsbyImageData.images.fallback.src;
          const thumbnailContent = data.node.sportsPostContent.raw;
          const slug = data.node.slug;
          const tagsList = data.node.tagsJson.tags;
          return (
            <PostThumbNailCardUI
              title={title}
              writtenTime={writtenTime}
              thumbnailImageSrc={thumbnailImageSrc}
              thumbnailContent={thumbnailContent}
              slug={slug}
              tagsList={tagsList}
              key={slug}
            ></PostThumbNailCardUI>
          );
        })}
      </ul>
    </>
  );
}
