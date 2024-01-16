import * as React from 'react';
import MainContentFixedHeader from '../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';

export default function FrontendMainContent() {
  return (
    <>
      <MainContentFixedHeader category='프론트엔드 개발 이야기' />
      <MainContentCategoryExplain />
    </>
  );
}
