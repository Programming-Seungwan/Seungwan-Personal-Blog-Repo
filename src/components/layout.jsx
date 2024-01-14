import * as React from 'react';
import { container } from './layout.module.css';
import Navbar from './navigation/navbar.jsx';
import MainContent from './main-content/main-content.jsx';

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <Navbar />
      <MainContent />
    </main>
  );
};

export default Layout;
