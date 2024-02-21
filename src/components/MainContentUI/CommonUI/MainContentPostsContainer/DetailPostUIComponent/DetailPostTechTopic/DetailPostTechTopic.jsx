import { postTopicContainer } from './index.module.css';

export default function DetailPostTechTopic({ postTopic }) {
  return (
    <div className={postTopicContainer}>
      {postTopic === 'algorithm' && '알고리즘'}
      {postTopic === 'backend' && '백엔드'}
      {postTopic === 'Operating System' && '운영체제'}
    </div>
  );
}
