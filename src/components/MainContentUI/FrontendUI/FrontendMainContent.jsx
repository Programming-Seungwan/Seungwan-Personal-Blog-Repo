import MainContentFixedHeader from '../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';
import MainContentPostsContainer from '../CommonUI/MainContentPostsContainer/MainContentPostsContainer';
import MainContentFooter from '../CommonUI/MainContentFooter/MainContentFooter';
import { feDiv, feDescript } from './index.module.css';

export default function FrontendMainContent() {
  return (
    <>
      <MainContentFixedHeader category='프론트엔드 개발 이야기' />
      <MainContentCategoryExplain>
        <div className={feDiv}>👨🏻‍💻 Frontend Development</div>
        <div className={feDescript}>UX, UI, 그리고 DX</div>
      </MainContentCategoryExplain>
      <MainContentPostsContainer mainContentType='frontend' />
      <MainContentFooter />
    </>
  );
}
