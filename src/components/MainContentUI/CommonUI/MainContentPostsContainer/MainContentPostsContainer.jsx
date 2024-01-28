import * as React from 'react';
import { mainContentPostsContainer } from './index.module.css';
import SportsMainContentPosts from './SportsMainContentPosts';
import HomeMaincContentPosts from './HomeMainContentPosts';
import TechMainContentPosts from './TechMainContentPosts';
import TravelMainContentPosts from './TravelMainContentPosts';
import FrontendMainContentPosts from './FrontendMainContentPosts';

export default function MainContentPostsContainer({ mainContentType, children }) {
  return (
    <div className={mainContentPostsContainer}>
      {mainContentType === 'sports' && <SportsMainContentPosts />}
      {mainContentType === 'travel' && <TravelMainContentPosts />}
      {mainContentType === 'frontend' && <FrontendMainContentPosts />}
      {mainContentType === 'tech' && <TechMainContentPosts />}
    </div>
  );
}
