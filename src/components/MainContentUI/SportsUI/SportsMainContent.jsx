import * as React from 'react';
import MainContentFixedHeader from '../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';
import { sportsDiv, sportsDescript } from './index.module.css';

export default function SportsMainContent() {
  return (
    <>
      <MainContentFixedHeader category='스포츠, 나의 행복' />
      <MainContentCategoryExplain>
        <div className={sportsDiv}>🥊 Sports</div>
        <div className={sportsDescript}>Baseball, Football, Boxing. Happiness of my life</div>
      </MainContentCategoryExplain>
    </>
  );
}
