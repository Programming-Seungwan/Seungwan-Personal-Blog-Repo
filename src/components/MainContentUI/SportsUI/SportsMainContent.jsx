import * as React from 'react';
import MainContentFixedHeader from '../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';

export default function SportsMainContent() {
  return (
    <>
      <MainContentFixedHeader category='스포츠, 나의 행복' />
      <MainContentCategoryExplain />
    </>
  );
}
