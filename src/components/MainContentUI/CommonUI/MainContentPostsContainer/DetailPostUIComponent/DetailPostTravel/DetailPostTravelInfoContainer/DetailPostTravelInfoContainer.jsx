import DetailPostTravelCityBox from '../DetailPostTravelCityBox/DetailPostTravelCityBox';
import DetailPostTravelIsAbroadBox from '../DetailPostTravelIsAbroadBox/DetailPostTravelIsAbroadBox';
import { detailPostTravelInfoContainer } from './index.module.css';

export default function DetailPostTravelInfoContainer({ postIsAbroad, postCity }) {
  return (
    <div className={detailPostTravelInfoContainer}>
      <DetailPostTravelCityBox postCity={postCity} />
      <DetailPostTravelIsAbroadBox postIsAbroad={postIsAbroad} />
    </div>
  );
}
