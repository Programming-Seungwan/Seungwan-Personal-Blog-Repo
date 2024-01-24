import * as React from 'react';
import { mainContentPostsContainer } from './index.module.css';
import SportsMainContentPosts from './SportsMainContentPosts';

export default function MainContentPostsContainer({ mainContentType, children }) {
  return <div className={mainContentPostsContainer}>{mainContentType === 'sports' && <SportsMainContentPosts />}</div>;
}
