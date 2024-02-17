import { mainContent } from './mainContent.module.css';
import AboutMainContent from '../MainContentUI/AboutUI/AboutMainContent';
import FrontendMainContent from '../MainContentUI/FrontendUI/FrontendMainContent';
import HomeMainContent from '../MainContentUI/HomeUI/HomeMainContent';
import SportsMainContent from '../MainContentUI/SportsUI/SportsMainContent';
import TechMainContent from '../MainContentUI/TechUI/TechMainContent';
import TravelMainContent from '../MainContentUI/TravelUI/TravelMainContent';
import FrontendPostMainContent from '../MainContentUI/PostUI/FrontendPostUI/FrontendPostMainContent';
import SportsPostMainContent from '../MainContentUI/PostUI/SportsPostUI/SportsPostMainContent';
import TechPostMainContent from '../MainContentUI/PostUI/TechPostUI/TechPostMainContent';
import TravelPostMainContent from '../MainContentUI/PostUI/TravelPostUI/TravelPostMainContent';

export default function MainContent({ pageCategory }) {
  return (
    <>
      <div className={`${mainContent} scroll-box`}>
        {pageCategory === 'about' && <AboutMainContent />}
        {pageCategory === 'frontend' && <FrontendMainContent />}
        {pageCategory === 'home' && <HomeMainContent />}
        {pageCategory === 'sports' && <SportsMainContent />}
        {pageCategory === 'tech' && <TechMainContent />}
        {pageCategory === 'travel' && <TravelMainContent />}
        {pageCategory === 'frontendPost' && <FrontendPostMainContent />}
        {pageCategory === 'sportsPost' && <SportsPostMainContent />}
        {pageCategory === 'techPost' && <TechPostMainContent />}
        {pageCategory === 'travelPost' && <TravelPostMainContent />}
      </div>
    </>
  );
}
