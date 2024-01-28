import * as React from 'react';
import MainContentFixedHeader from '../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';
import MainContentPostsContainer from '../CommonUI/MainContentPostsContainer/MainContentPostsContainer';
import MainContentFooter from '../CommonUI/MainContentFooter/MainContentFooter';
import { techDiv, techDescript } from './index.module.css';

export default function TechMainContent() {
  return (
    <>
      <MainContentFixedHeader category='기타 개발 이야기' />
      <MainContentCategoryExplain>
        <div className={techDiv}>⚒️ IT and Computer Science</div>
        <div className={techDescript}>IT 기술과 컴퓨터공학</div>
      </MainContentCategoryExplain>
      <MainContentPostsContainer mainContentType='tech' />
      <MainContentFooter />
    </>
  );
}
