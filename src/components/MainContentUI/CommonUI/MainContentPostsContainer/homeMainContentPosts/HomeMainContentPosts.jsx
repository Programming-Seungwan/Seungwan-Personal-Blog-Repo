import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import PostThumbNailCardUI from '../../PostThumbNailCardUI/PostThumbNailCardUI';
import { homeUl, postThumbNailCardAnchor } from './index.module.css';

export default function HomeMainContentPosts() {
  const dataArray = useStaticQuery(graphql`
    query allPostQuery {
      allContentfulSeungwanBlogSportsPost {
        nodes {
          category
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
          sportsPostContent {
            raw
          }
        }
      }
      allContentfulSeungwanBlogFrontendPost {
        nodes {
          category
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
      allContentfulSeungwanBlogTechPost {
        nodes {
          category
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
      allContentfulSeungwanBlogTravelPost {
        nodes {
          category
          slug
          tagsJson {
            tags
          }
          thumbnailImage {
            gatsbyImageData
          }
          title
          travelPostContent {
            raw
          }
          updatedAt
          writtenTime
        }
      }
    }
  `);
  const sportsPosts = dataArray.allContentfulSeungwanBlogSportsPost.nodes;
  const frontendPosts = dataArray.allContentfulSeungwanBlogFrontendPost.nodes;
  const techPosts = dataArray.allContentfulSeungwanBlogTechPost.nodes;
  const travelPosts = dataArray.allContentfulSeungwanBlogTravelPost.nodes;
  const allPosts = [...sportsPosts, ...frontendPosts, ...techPosts, ...travelPosts];
  const sortedAllPosts = allPosts.sort((a, b) => {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });

  return (
    <>
      <ul className={`${homeUl} scroll-box`}>
        {sortedAllPosts.map((post) => {
          const title = post.title;
          const writtenTime = post.writtenTime;
          const thumbnailImageSrc =
            post.thumbnailImage.gatsbyImageData.images.fallback.src != undefined
              ? post.thumbnailImage.gatsbyImageData.images.fallback.src
              : post.thumbnailImage.gatsbyImageData.images.sources[0].srcSet;
          let thumbnailContent = null;
          const postCategory = post.category;
          try {
            if (postCategory === 'sports') {
              thumbnailContent = post.sportsPostContent.raw;
            } else if (postCategory === 'travel') {
              thumbnailContent = post.travelPostContent.raw;
            } else if (postCategory === 'tech') {
              thumbnailContent = post.techPostContent.raw;
            } else if (postCategory === 'frontend') {
              thumbnailContent = post.frontendPostContent.raw;
            }
          } catch (err) {
            console.log(err);
          }
          const slug = post.slug;
          const tagsList = post.tagsJson.tags;
          return (
            <Link to={`/post/${postCategory}/${slug}`} className={postThumbNailCardAnchor} key={slug}>
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
