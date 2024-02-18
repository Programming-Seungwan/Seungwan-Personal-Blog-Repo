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

  const frontendPostTemplate = path.resolve('./src/templates/frontend/FrontendPostTemplate.jsx');

  const frontendPostResult = await graphql(`
    query frontendPostQuery {
      allContentfulSeungwanBlogFrontendPost {
        edges {
          node {
            slug
            updatedAt(formatString: "YYYY-MM-DD")
            frontendPostContent {
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

  frontendPostResult.data.allContentfulSeungwanBlogFrontendPost.edges.forEach((frontendPost) => {
    createPage({
      path: `/post/frontend/${frontendPost.node.slug}`,
      component: frontendPostTemplate,
      context: frontendPost.node,
    });
  });
  reporter.info('Successfully created pages for frontend post');

  const techPostTemplate = path.resolve('./src/templates/tech/TechPostTemplate.jsx');

  const techPostResult = await graphql(`
    query techPostQuery {
      allContentfulSeungwanBlogTechPost {
        edges {
          node {
            slug
            updatedAt(formatString: "YYYY-MM-DD")
            techPostContent {
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

  techPostResult.data.allContentfulSeungwanBlogTechPost.edges.forEach((techPost) => {
    createPage({
      path: `/post/tech/${techPost.node.slug}`,
      component: techPostTemplate,
      context: techPost.node,
    });
  });
  reporter.info('Successfully created pages for tech post');
};
