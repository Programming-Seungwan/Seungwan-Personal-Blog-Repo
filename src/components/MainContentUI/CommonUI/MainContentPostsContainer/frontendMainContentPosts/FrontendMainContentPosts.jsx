import { graphql, useStaticQuery } from 'gatsby';
import { frontendUl, postThumbNailCardAnchor } from './index.module.css';
import PostThumbNailCardUI from '../../PostThumbNailCardUI/PostThumbNailCardUI';
import { Link } from 'gatsby';

export default function FrontendMainContentPosts() {
  const dataArray = useStaticQuery(graphql`
    query MyFrontendQuery {
      allContentfulSeungwanBlogFrontendPost {
        edges {
          node {
            slug
            tagsJson {
              tags
            }
            thumbnailImage {
              gatsbyImageData
            }
            title
            updatedAt
            writtenTime
            frontendPostContent {
              raw
            }
          }
        }
      }
    }
  `).allContentfulSeungwanBlogFrontendPost.edges;
  return (
    <ul className={`${frontendUl} scroll-box`}>
      {dataArray.map((data) => {
        const title = data.node.title;
        const writtenTime = data.node.writtenTime;
        const thumbnailImageSrc = data.node.thumbnailImage.gatsbyImageData.images.fallback.src;
        const thumbnailContent = data.node.frontendPostContent.raw;
        const slug = data.node.slug;
        const tagsList = data.node.tagsJson.tags;
        return (
          <Link to={`/post/frontend/${slug}`} className={postThumbNailCardAnchor} key={slug}>
            <PostThumbNailCardUI
              title={title}
              writtenTime={writtenTime}
              thumbnailImageSrc={thumbnailImageSrc}
              thumbnailContent={thumbnailContent}
              slug={slug}
              tagsList={tagsList}
            ></PostThumbNailCardUI>
          </Link>
        );
      })}
    </ul>
  );
}
