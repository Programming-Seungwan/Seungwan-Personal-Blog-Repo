import * as React from 'react';
import MainContentFixedHeader from '../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';
import MainContentPostsContainer from '../CommonUI/MainContentPostsContainer/MainContentPostsContainer';
import MainContentFooter from '../CommonUI/MainContentFooter/MainContentFooter';
import { travelDiv, travelDescript } from './index.module.css';

export default function TravelMainContent() {
  return (
    <>
      <MainContentFixedHeader category='여행, 삶의 원동력' />
      <MainContentCategoryExplain>
        <div className={travelDiv}>✈️ Travel, Trip, Journey</div>
        <div className={travelDescript}>여행은 인생의 엔진</div>
      </MainContentCategoryExplain>
      <MainContentPostsContainer mainContentType='travel' />
      <MainContentFooter />
    </>
  );
}
