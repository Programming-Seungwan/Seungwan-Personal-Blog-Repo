import * as React from 'react';
import { container } from './layout.module.css';
import Navbar from '../navigation/navbar.jsx';
import { useRecoilState } from 'recoil';
import { hamburgerButtonClickedState } from '../../state/atom.js';

const Layout = ({ pageTitle, children }) => {
  const [isHamburgerButtonClicked, setIsHamburgerButtonClicked] = useRecoilState(hamburgerButtonClickedState);

  function handleClickContainer() {
    if (isHamburgerButtonClicked) {
      setIsHamburgerButtonClicked(false);
    } else {
      return;
    }
  }
  return (
    <main className={container} onClick={handleClickContainer}>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
