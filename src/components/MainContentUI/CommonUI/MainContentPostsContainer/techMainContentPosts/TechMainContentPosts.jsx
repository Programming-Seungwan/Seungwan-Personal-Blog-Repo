import { graphql, useStaticQuery } from 'gatsby';
import { techUl, postThumbNailCardAnchor } from './index.module.css';
import PostThumbNailCardUI from '../../PostThumbNailCardUI/PostThumbNailCardUI';
import { Link } from 'gatsby';

export default function TechMainContentPosts() {
  const dataArray = useStaticQuery(graphql`
    query MyTechQuery {
      allContentfulSeungwanBlogTechPost {
        edges {
          node {
            slug
            tagsJson {
              tags
            }
            techPostContent {
              raw
            }
            thumbnailImage {
              gatsbyImageData
            }
            title
            updatedAt
            writtenTime
          }
        }
      }
    }
  `).allContentfulSeungwanBlogTechPost.edges;

  return (
    <ul className={`${techUl} scroll-box`}>
      {dataArray.map((data) => {
        const title = data.node.title;
        const writtenTime = data.node.writtenTime;
        const thumbnailImageSrc = data.node.thumbnailImage.gatsbyImageData.images.fallback.src;
        const thumbnailContent = data.node.techPostContent.raw;
        const slug = data.node.slug;
        const tagsList = data.node.tagsJson.tags;
        return (
          <Link to={`/post/tech/${slug}`} className={postThumbNailCardAnchor} key={slug}>
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
