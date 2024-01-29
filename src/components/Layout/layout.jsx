import React, { useState, useEffect } from 'react';
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
  // // 브라우저의 높이를 해결하기 위한 useEffect
  // const [windowHeight, setWindowHeight] = useState(0);
  // useEffect(() => {
  //   // 윈도우 높이를 설정하는 함수
  //   const handleResize = () => {
  //     setWindowHeight(window.innerHeight);
  //   };

  //   // 컴포넌트가 마운트되었을 때 초기 윈도우 높이를 설정
  //   handleResize();

  //   // 윈도우 크기가 변경될 때마다 높이를 업데이트
  //   window.addEventListener('resize', handleResize);

  //   // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // const style = {
  //   height: `${windowHeight}px`,
  //   // 다른 스타일들
  // };

  return (
    <main className={container} onClick={handleClickContainer}>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
