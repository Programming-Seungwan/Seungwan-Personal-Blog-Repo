export default function DetailPostTravelIsAbroadBox({ postIsAbroad }) {
  return <div>{postIsAbroad === true ? '해외' : '국내'}</div>;
}
