import * as React from 'react';
import { categoryExplainContainer } from './index.module.css';

export default function MainContentCategoryExplain({ children }) {
  return <div className={categoryExplainContainer}>{children}</div>;
}
