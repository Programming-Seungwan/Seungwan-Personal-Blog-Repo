const path = require('path');

// exports는 한번만 하고, 빌드 시간에 원하는 동작들은 아래에 모두 기술한다
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const travelPostTemplate = path.resolve('./src/templates/travel/TravelPostTemplate.jsx');

  const travelPostResult = await graphql(`
    query travelPostQuery {
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
  `);

  travelPostResult.data.allContentfulSeungwanBlogTravelPost.edges.forEach((travelPost) => {
    createPage({
      path: `/post/travel/${travelPost.node.slug}`,
      component: travelPostTemplate,
      context: travelPost.node,
    });
  });
  reporter.info('Successfully created pages for travel post');

  const sportsPostTemplate = path.resolve('./src/templates/sports/SportsPostTemplate.jsx');
  const sportsPostResult = await graphql(`
    query sportsPostQuery {
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
  `);

  sportsPostResult.data.allContentfulSeungwanBlogSportsPost.edges.forEach((sportsPost) => {
    createPage({
      path: `/post/sports/${sportsPost.node.slug}`,
      component: sportsPostTemplate,
      context: sportsPost.node,
    });
  });
  reporter.info('Successfully created pages for Sports post');
};
