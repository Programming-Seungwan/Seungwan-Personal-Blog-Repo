import * as React from 'react';
import MainContentFixedHeader from '../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';
import MainContentFooter from '../CommonUI/MainContentFooter/MainContentFooter';
import { aboutMeDiv, selfDescript } from './index.module.css';
import Profile from './Profile';
import Like from './Like';
export default function AboutMainContent() {
  return (
    <>
      <MainContentFixedHeader category='나, 김승완' />
      <MainContentCategoryExplain>
        <div className={aboutMeDiv}>🏃🏻 About me</div>
        <div className={selfDescript}> 안녕하세요 운동, 여행을 사랑하는 개발자 김승완입니다</div>
      </MainContentCategoryExplain>
      <Profile />
      <Like />
      <MainContentFooter />
    </>
  );
}
