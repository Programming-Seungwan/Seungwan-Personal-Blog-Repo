import DetailPostTitle from '../DetailPostUIComponent/DetailPostTitle/DetailPostTitle';
import DetailPostWrittenTime from '../DetailPostUIComponent/DetailPostWrittenTime/DetailPostWrittenTime';
import DetailPostThumbnailImage from '../DetailPostUIComponent/DetailPostThumbnailImage/DetailPostThumbnailImage';
import DetailPostContent from '../DetailPostUIComponent/DetailPostContent/DetailPostContent';
import DetailPostTags from '../DetailPostUIComponent/DetailPostTags/DetailPostTags';
import DetailPostTechTopic from '../DetailPostUIComponent/DetailPostTechTopic/DetailPostTechTopic';

export default function DetailTechMainContentPost({ postData }) {
  return (
    <>
      <DetailPostTitle postTitle={postData.title} />
      <DetailPostWrittenTime postWrittenTime={postData.writtenTime} />
      <DetailPostTechTopic postTopic={postData.topic} />
      <DetailPostThumbnailImage postImageSrc={postData.thumbnailImage.gatsbyImageData.images.fallback.src} />
      <DetailPostContent postContent={postData.techPostContent.raw} />
      <DetailPostTags postTagsArray={postData.tagsJson.tags} />
    </>
  );
}
