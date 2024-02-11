import { mainContentPostsContainer } from './index.module.css';
import SportsMainContentPosts from './sportsMainContentPosts/SportsMainContentPosts';
import TechMainContentPosts from './techMainContentPosts/TechMainContentPosts';
import TravelMainContentPosts from './travelMainContentPosts/TravelMainContentPosts';
import FrontendMainContentPosts from './frontendMainContentPosts/FrontendMainContentPosts';

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
