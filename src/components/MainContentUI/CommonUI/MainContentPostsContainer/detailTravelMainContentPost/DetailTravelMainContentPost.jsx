import DetailPostTitle from '../DetailPostUIComponent/DetailPostTitle/DetailPostTitle';
import DetailPostWrittenTime from '../DetailPostUIComponent/DetailPostWrittenTime/DetailPostWrittenTime';
import DetailPostThumbnailImage from '../DetailPostUIComponent/DetailPostThumbnailImage/DetailPostThumbnailImage';
import DetailPostContent from '../DetailPostUIComponent/DetailPostContent/DetailPostContent';
import DetailPostTags from '../DetailPostUIComponent/DetailPostTags/DetailPostTags';
import DetailPostTravelInfoContainer from '../DetailPostUIComponent/DetailPostTravel/DetailPostTravelInfoContainer/DetailPostTravelInfoContainer';

export default function DetailTravelMainContentPost({ postData }) {
  return (
    <>
      <DetailPostTitle postTitle={postData.title}></DetailPostTitle>
      <DetailPostWrittenTime postWrittenTime={postData.writtenTime} />
      <DetailPostTravelInfoContainer postIsAbroad={postData.isAbroad} postCity={postData.city} />
      <DetailPostThumbnailImage postImageSrc={postData.thumbnailImage.gatsbyImageData.images.fallback.src} />
      <DetailPostContent postContent={postData.travelPostContent.raw} />
      <DetailPostTags postTagsArray={postData.tagsJson.tags} />
    </>
  );
}
