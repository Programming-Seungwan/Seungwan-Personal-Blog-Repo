import { detailPostTitle } from './index.module.css';

export default function DetailPostTitle({ postTitle }) {
  return <div className={detailPostTitle}>{postTitle}</div>;
}
