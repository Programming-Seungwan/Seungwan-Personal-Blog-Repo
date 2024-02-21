import DetailPostTitle from '../DetailPostUIComponent/DetailPostTitle/DetailPostTitle';
import DetailPostWrittenTime from '../DetailPostUIComponent/DetailPostWrittenTime/DetailPostWrittenTime';
import DetailPostThumbnailImage from '../DetailPostUIComponent/DetailPostThumbnailImage/DetailPostThumbnailImage';
import DetailPostContent from '../DetailPostUIComponent/DetailPostContent/DetailPostContent';
import DetailPostTags from '../DetailPostUIComponent/DetailPostTags/DetailPostTags';
import DetailPostContainer from '../DetailPostUIComponent/DetailPostContainer/DetailPostContainer';

export default function DetailSportsMainContentPost({ postData }) {
  return (
    <DetailPostContainer>
      <DetailPostTitle postTitle={postData.title} />
      <DetailPostWrittenTime postWrittenTime={postData.writtenTime} />
      <DetailPostThumbnailImage postImageSrc={postData.thumbnailImage.gatsbyImageData.images.fallback.src} />
      <DetailPostContent postContent={postData.sportsPostContent.raw} />
      <DetailPostTags postTagsArray={postData.tagsJson.tags} />
    </DetailPostContainer>
  );
}
