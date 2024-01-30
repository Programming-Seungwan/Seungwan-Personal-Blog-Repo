import { useState } from 'react';
import { likeContainer, likeToggleContainer, likesSubjectContainer, likeSubject } from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function Like() {
  const [likeToggleButton, setLikeToggleButon] = useState(true);

  function handleClickLikeToggleButton() {
    setLikeToggleButon((before) => !before);
  }
  return (
    <div className={likeContainer}>
      <div className={likeToggleContainer}>
        {likeToggleButton && <FontAwesomeIcon icon={faCaretRight} size='2x' onClick={handleClickLikeToggleButton} />}
        {!likeToggleButton && <FontAwesomeIcon icon={faCaretDown} size='2x' onClick={handleClickLikeToggleButton} />}
        <span>좋아하는 것</span>
      </div>

      {!likeToggleButton && (
        <div className={likesSubjectContainer}>
          <div className={likeSubject}>
            <FontAwesomeIcon icon={fa1} size='lg' />
            <span>야구 ⚾️ : 두산 베어스를 응원하고 있습니다</span>
          </div>
          <div className={likeSubject}>
            <FontAwesomeIcon icon={fa2} size='lg' />
            <span>여행 🚐 : 국내, 해외 가릴 것 없이 좋아합니다</span>
          </div>
          <div className={likeSubject}>
            <FontAwesomeIcon icon={fa3} size='lg' />
            <span>술 🍹 : 주종을 가리지 않습니다</span>
          </div>
        </div>
      )}
    </div>
  );
}
