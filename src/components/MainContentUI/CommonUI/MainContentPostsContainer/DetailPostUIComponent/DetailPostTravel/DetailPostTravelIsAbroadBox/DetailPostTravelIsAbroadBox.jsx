export default function DetailPostTravelIsAbroadBox({ postIsAbroad }) {
  console.log(postIsAbroad);
  return <div>{postIsAbroad === true ? '해외' : '국내'}</div>;
}
