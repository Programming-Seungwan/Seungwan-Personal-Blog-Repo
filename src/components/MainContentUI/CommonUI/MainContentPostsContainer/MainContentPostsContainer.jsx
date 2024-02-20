import { mainContentPostsContainer } from './index.module.css';
import SportsMainContentPosts from './sportsMainContentPosts/SportsMainContentPosts';
import TechMainContentPosts from './techMainContentPosts/TechMainContentPosts';
import TravelMainContentPosts from './travelMainContentPosts/TravelMainContentPosts';
import FrontendMainContentPosts from './frontendMainContentPosts/FrontendMainContentPosts';
import HomeMainContentPosts from './homeMainContentPosts/HomeMainContentPosts';
import DetailTravelMainContentPost from './detailTravelMainContentPost/DetailTravelMainContentPost';
import DetailTechMainContentPost from './detailTechMainContentPost/DetailTechMainContentPost';
import DetailSportsMainContentPost from './detailSportsMainContentPost/DetailSportsMainContentPost';
import DetailFrontendMainContentPost from './detailFrontendMainContentPost/DetailFrontendMainContentPost';

export default function MainContentPostsContainer({ mainContentType, postData }) {
  return (
    <div className={mainContentPostsContainer}>
      {mainContentType === 'sports' && <SportsMainContentPosts />}
      {mainContentType === 'travel' && <TravelMainContentPosts />}
      {mainContentType === 'frontend' && <FrontendMainContentPosts />}
      {mainContentType === 'tech' && <TechMainContentPosts />}
      {mainContentType === 'home' && <HomeMainContentPosts />}
      {mainContentType === 'sportsPost' && <DetailSportsMainContentPost postData={postData} />}
      {mainContentType === 'frontendPost' && <DetailFrontendMainContentPost postData={postData} />}
      {mainContentType === 'techPost' && <DetailTechMainContentPost postData={postData} />}
      {mainContentType === 'travelPost' && <DetailTravelMainContentPost postData={postData} />}
    </div>
  );
}
