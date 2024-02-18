import MainContentFixedHeader from '../../CommonUI/MainContentFixedHeader/MainContentFixedHeader';
import MainContentCategoryExplain from '../../CommonUI/MainContentCategoryExplain/MainContentCategoryExplain';
import MainContentFooter from '../../CommonUI/MainContentFooter/MainContentFooter';
import { frontendPostDiv, frontendPostDescript } from './index.module.css';

export default function FrontendPostMainContent() {
  return (
    <>
      <MainContentFixedHeader category='FE 성장과 경험' />
      <MainContentCategoryExplain>
        <div className={frontendPostDiv}>👀 프론트엔드 개발 일지</div>
        <div className={frontendPostDescript}>
          단순히 눈에 보이는 것만이 아닌, 사용자의 모든 경험과 행복을 위한 공부
        </div>
      </MainContentCategoryExplain>
      <MainContentFooter />
    </>
  );
}
