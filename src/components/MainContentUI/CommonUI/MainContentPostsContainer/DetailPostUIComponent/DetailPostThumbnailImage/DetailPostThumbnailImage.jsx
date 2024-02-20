import { detailPostThumbnailImageContainer, detailPostThumbnailImage } from './index.module.css';

export default function DetailPostThumbnailImage({ postImageSrc }) {
  return (
    <div className={detailPostThumbnailImageContainer}>
      <img src={postImageSrc} alt='This is frontend post thumbnail image' className={detailPostThumbnailImage} />
    </div>
  );
}
