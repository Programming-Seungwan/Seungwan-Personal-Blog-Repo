import { graphql, useStaticQuery } from 'gatsby';
import { travelUl } from './index.module.css';
import PostThumbNailCardUI from '../../PostThumbNailCardUI/PostThumbNailCardUI';

export default function TravelMainContentPosts() {
  const travelDataArray = useStaticQuery(graphql`
    query MyTravelQuery {
      allContentfulSeungwanBlogTravelPost {
        edges {
          node {
            slug
            updatedAt(formatString: "YYYY-MM-DD")
            writtenTime
            isAbroad
            city
            travelPostContent {
              raw
            }
            tagsJson {
              tags
            }
            title
            thumbnailImage {
              gatsbyImageData
            }
          }
        }
      }
    }
  `).allContentfulSeungwanBlogTravelPost.edges;
  console.log(travelDataArray);
  return (
    <>
      <ul className={`${travelUl} scroll-box`}>
        {travelDataArray.map((data) => {
          const title = data.node.title;
          const writtenTime = data.node.writtenTime;
          const thumbnailImageSrc = data.node.thumbnailImage.gatsbyImageData.images.fallback.src;
          const thumbnailContent = data.node.travelPostContent.raw;
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
