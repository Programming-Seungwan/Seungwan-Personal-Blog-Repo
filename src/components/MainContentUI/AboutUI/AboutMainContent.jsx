import * as React from 'react';
import MainContentFixedHeader from '../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';

export default function AboutMainContent() {
  return (
    <>
      <MainContentFixedHeader category='나, 김승완' />
      <MainContentCategoryExplain />
    </>
  );
}
