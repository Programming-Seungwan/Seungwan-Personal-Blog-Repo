import { travelCityBox } from './index.module.css';

export default function DetailPostTravelCityBox({ postCity }) {
  return <div className={travelCityBox}>{postCity}</div>;
}
