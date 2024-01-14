import * as React from 'react';
import { navBar } from './navbar.module.css';
import NavHeader from './navHeader';
import Navmain from './navMain';
import NavFooter from './navFooter';

export default function Navbar() {
  return (
    <div className={navBar}>
      <NavHeader />
      <Navmain />
      <NavFooter />
    </div>
  );
}
