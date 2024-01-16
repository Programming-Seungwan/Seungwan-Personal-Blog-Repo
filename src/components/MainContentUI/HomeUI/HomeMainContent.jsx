import * as React from 'react';
import MainContentFixedHeader from '../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';

export default function HomeMainContent() {
  return (
    <>
      <MainContentFixedHeader category='김승완 개인 블로그' />
      <MainContentCategoryExplain />
    </>
  );
}
