import MainContentFixedHeader from '../../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';
import MainContentFooter from '../../CommonUI/MainContentFooter/MainContentFooter';
import MainContentPostsContainer from '../../CommonUI/MainContentPostsContainer/MainContentPostsContainer';
import { sportsPostDiv, sportsPostDescript } from './index.module.css';

export default function SportsPostMainContent({ postData }) {
  return (
    <>
      <MainContentFixedHeader category='스포츠 생각' />
      <MainContentCategoryExplain>
        <div className={sportsPostDiv}>🐌 꾸준한 운동 달팽이</div>
        <div className={sportsPostDescript}>직접 뛰고, 본 운동을 기록합니다</div>
      </MainContentCategoryExplain>
      <MainContentPostsContainer mainContentType='sportsPost' postData={postData} />
      <MainContentFooter />
    </>
  );
}
