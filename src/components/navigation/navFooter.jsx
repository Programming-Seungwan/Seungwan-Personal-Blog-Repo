import { navFooter, gatsbyLogo, graphQLLogo, contentfulLogo } from './navbar.module.css';

export default function NavFooter() {
  return (
    <div className={navFooter}>
      Powered By
      <a href='https://www.gatsbyjs.com/' target='_blank' rel='noreferrer'>
        <img src='/images/gatsby.png' alt='Gatshy logo' className={gatsbyLogo} />
      </a>
      <a href='https://www.gatsbyjs.com/' target='_blank' rel='noreferrer'>
        <img src='/images/GraphQL.png' alt='graphQL logo' className={graphQLLogo} />
      </a>
      <a href='https://www.contentful.com/' target='_blank' rel='noreferrer'>
        <img src='/images/contentful.png' alt='contentful logo' className={contentfulLogo} />
      </a>
    </div>
  );
}
