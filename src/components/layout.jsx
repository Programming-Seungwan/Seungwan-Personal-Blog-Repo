import * as React from 'react';
import { container } from './layout.module.css';
import Navbar from './navigation/navbar.jsx';

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
