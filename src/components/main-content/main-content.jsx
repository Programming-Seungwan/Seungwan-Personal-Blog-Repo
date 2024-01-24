import * as React from 'react';
import { mainContent } from './mainContent.module.css';
import AboutMainContent from '../MainContentUI/AboutUI/AboutMainContent';
import FrontendMainContent from '../MainContentUI/FrontendUI/FrontendMainContent';
import HomeMainContent from '../MainContentUI/HomeUI/HomeMainContent';
import SportsMainContent from '../MainContentUI/SportsUI/SportsMainContent';
import TechMainContent from '../MainContentUI/TechUI/TechMainContent';
import TravelMainContent from '../MainContentUI/TravelUI/TravelMainContent';

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
      </div>
    </>
  );
}
