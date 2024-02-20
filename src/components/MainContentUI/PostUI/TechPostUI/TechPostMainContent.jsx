import MainContentFixedHeader from '../../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';
import MainContentFooter from '../../CommonUI/MainContentFooter/MainContentFooter';
import MainContentPostsContainer from '../../CommonUI/MainContentPostsContainer/MainContentPostsContainer';
import { techPostDiv, techPostDescript } from './index.module.css';

export default function TechPostMainContent({ postData }) {
  return (
    <>
      <MainContentFixedHeader category='기타 개발 저장소' />
      <MainContentCategoryExplain>
        <div className={techPostDiv}>💻 더 나은 성장을 위한 기타 개발</div>
        <div className={techPostDescript}>FE 이외의 AI, 백엔드 등 컴퓨터공학 전반에 대해 다룹니다</div>
      </MainContentCategoryExplain>
      <MainContentPostsContainer mainContentType='techPost' postData={postData} />
      <MainContentFooter />
    </>
  );
}
