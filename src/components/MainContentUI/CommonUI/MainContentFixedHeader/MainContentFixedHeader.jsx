import * as React from 'react';
import { fixedHeaderContainer } from './index.module.css';

export default function MainContentFixedHeader({ category }) {
  return (
    <div className={fixedHeaderContainer}>
      <span>{category}</span>
    </div>
  );
}
