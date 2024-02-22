import { detailPostWrittenTime } from './index.module.css';
import moment from 'moment';
import { useState, useEffect } from 'react';

export default function DetailPostWrittenTime({ postWrittenTime }) {
  const [postWrittenTimeUI, setPostWrittenTimeUI] = useState(null);

  useEffect(() => {
    setPostWrittenTimeUI(moment(postWrittenTime).format('MMM Do YY'));
  }, []);

  return <div className={detailPostWrittenTime}>{postWrittenTimeUI}</div>;
}
