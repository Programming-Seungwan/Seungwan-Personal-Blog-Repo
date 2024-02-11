import moment from 'moment';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import {
  postThumbNailCardAnchor,
  postThumbNailCardContainer,
  postThumbNailCardTitle,
  postThumbNailCardWrittenDate,
  postThumbNailCardPreviewThumbnail,
  previewImage,
  previewSummaryAndTagsContainer,
  previewSummary,
  previewTags,
  hashtag,
} from './index.module.css';

export default function PostThumbNailCardUI({
  title,
  writtenTime,
  thumbnailImageSrc,
  thumbnailContent,
  slug,
  tagsList,
}) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      // Add other mark renderers as needed
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      // Add other node renderers as needed
    },
  };

  const postContent = JSON.parse(thumbnailContent);

  return (
    <div className={postThumbNailCardContainer}>
      <div className={postThumbNailCardTitle}>{title}</div>
      <div className={postThumbNailCardWrittenDate}>{moment(writtenTime).format('MMM Do YY')}</div>
      <div className={postThumbNailCardPreviewThumbnail}>
        <div className={previewImage}>
          {/* <GatsbyImage image={image} alt={`This is ${slug} thumbnail image`} /> */}
          <img src={thumbnailImageSrc} alt='this is thumbnailImage' />
        </div>
        <div className={previewSummaryAndTagsContainer}>
          <div className={previewSummary}>{documentToReactComponents(postContent, options)}</div>
          <div className={previewTags}>
            <ul>
              {tagsList.map((tag) => {
                return (
                  <p key={tag} className={hashtag}>
                    #{tag}
                  </p>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
