import { detailPostWrittenTime } from './index.module.css';
import moment from 'moment';

export default function DetailPostWrittenTime({ postWrittenTime }) {
  return <div className={detailPostWrittenTime}>{moment(postWrittenTime).format('MMM Do YY')}</div>;
}
