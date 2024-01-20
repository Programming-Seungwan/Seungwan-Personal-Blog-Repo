import * as React from 'react';
import { mainContentPostsContainer } from './index.module.css';

export default function MainContentPostsContainer({ children }) {
  return <div className={mainContentPostsContainer}>{children}</div>;
}
