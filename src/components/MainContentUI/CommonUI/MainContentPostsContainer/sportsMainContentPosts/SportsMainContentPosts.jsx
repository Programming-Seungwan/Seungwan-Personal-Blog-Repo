import { graphql, useStaticQuery } from 'gatsby';
import { sportsUl, postThumbNailCardAnchor } from './index.module.css';
import PostThumbNailCardUI from '../../PostThumbNailCardUI/PostThumbNailCardUI';
import { Link } from 'gatsby';

export default function SportsMainContentPosts() {
  const dataArray = useStaticQuery(graphql`
    query MySportsQuery {
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
            writtenTime
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
      <ul className={`${sportsUl} scroll-box`}>
        {dataArray.map((data) => {
          const title = data.node.title;
          const writtenTime = data.node.writtenTime;
          const thumbnailImageSrc = data.node.thumbnailImage.gatsbyImageData.images.fallback.src;
          const thumbnailContent = data.node.sportsPostContent.raw;
          const slug = data.node.slug;
          const tagsList = data.node.tagsJson.tags;
          return (
            <Link to={`/post/sports/${slug}`} className={postThumbNailCardAnchor} key={slug}>
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
    </>
  );
}
