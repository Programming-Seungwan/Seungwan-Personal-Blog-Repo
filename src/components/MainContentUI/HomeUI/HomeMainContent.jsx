import MainContentFixedHeader from '../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';
import MainContentPostsContainer from '../CommonUI/MainContentPostsContainer/MainContentPostsContainer';
import { homeExplainPara } from './index.module.css';

export default function HomeMainContent() {
  return (
    <>
      <MainContentFixedHeader category='김승완 개인 블로그' />
      <MainContentCategoryExplain>
        <div className={homeExplainPara}>Seungwan Personal Blog</div>
      </MainContentCategoryExplain>
      <MainContentPostsContainer></MainContentPostsContainer>
    </>
  );
}
