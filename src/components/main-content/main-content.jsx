import * as React from 'react';
import { mainContent } from './mainContent.module.css';

export default function MainContent({ pageCategory }) {
  return <div className={mainContent}>This is {pageCategory} main content area!</div>;
}
