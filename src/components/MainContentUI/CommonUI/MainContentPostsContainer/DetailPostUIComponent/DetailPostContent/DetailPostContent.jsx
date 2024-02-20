import { detailPostContent } from './index.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export default function DetailPostContent({ postContent }) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      // Add other mark renderers as needed
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      // Add other node renderers as needed
    },
    // 이외에도 renderText도 있다
  };
  const frontendPostContent = JSON.parse(postContent);
  return <div className={detailPostContent}>{documentToReactComponents(frontendPostContent, options)}</div>;
}
