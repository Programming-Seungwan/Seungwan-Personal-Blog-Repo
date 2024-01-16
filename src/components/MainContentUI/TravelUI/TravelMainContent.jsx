import * as React from 'react';
import MainContentFixedHeader from '../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';

export default function TravelMainContent() {
  return (
    <>
      <MainContentFixedHeader category='여행, 삶의 원동력' />
      <MainContentCategoryExplain />
    </>
  );
}
