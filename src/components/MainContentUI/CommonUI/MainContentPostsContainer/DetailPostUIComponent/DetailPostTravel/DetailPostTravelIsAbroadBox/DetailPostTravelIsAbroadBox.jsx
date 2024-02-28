import { isAbroadBox } from './index.module.css';

export default function DetailPostTravelIsAbroadBox({ postIsAbroad }) {
  return <div className={isAbroadBox}>{postIsAbroad === true ? '해외' : '국내'}</div>;
}
