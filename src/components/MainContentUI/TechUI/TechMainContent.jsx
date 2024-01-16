import * as React from 'react';
import MainContentFixedHeader from '../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';

export default function TechMainContent() {
  return (
    <>
      <MainContentFixedHeader category='기타 개발 이야기' />
      <MainContentCategoryExplain />
    </>
  );
}
