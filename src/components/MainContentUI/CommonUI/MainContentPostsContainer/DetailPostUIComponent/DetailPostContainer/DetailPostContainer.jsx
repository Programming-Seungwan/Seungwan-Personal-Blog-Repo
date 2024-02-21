import { detailPostContainer } from './index.module.css';

export default function DetailPostContainer({ children }) {
  return <div className={detailPostContainer}>{children}</div>;
}
