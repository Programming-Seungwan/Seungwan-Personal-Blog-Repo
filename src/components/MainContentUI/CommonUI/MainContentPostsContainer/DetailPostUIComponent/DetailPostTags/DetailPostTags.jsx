import { detailPostTags } from './index.module.css';

export default function DetailPostTags({ postTagsArray }) {
  return (
    <div className={detailPostTags}>
      {postTagsArray.map((tag) => {
        return <span key={tag}># {tag}</span>;
      })}
    </div>
  );
}
