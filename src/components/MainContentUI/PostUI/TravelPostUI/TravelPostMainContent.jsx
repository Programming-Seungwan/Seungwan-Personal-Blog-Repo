import MainContentFixedHeader from '../../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';
import MainContentFooter from '../../CommonUI/MainContentFooter/MainContentFooter';
import MainContentPostsContainer from '../../CommonUI/MainContentPostsContainer/MainContentPostsContainer';
import { travelPostDiv, travelPostDescript } from './index.module.css';

export default function TravelPostMainContent() {
  return (
    <>
      <MainContentFixedHeader category='여행기' />
      <MainContentCategoryExplain>
        <div className={travelPostDiv}>🚐 여행 데이터베이스</div>
        <div className={travelPostDescript}>지금까지 다니고, 경험한 것을 기록합니다</div>
      </MainContentCategoryExplain>
      <MainContentPostsContainer mainContentType='travelPost' />
      <MainContentFooter />
    </>
  );
}
