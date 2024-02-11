import React, { useEffect } from 'react';
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setIsHamburgerButtonClicked(false);
      }
    };

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);

    // 컴포넌트 마운트 시 한 번 체크
    handleResize();

    // 클린업 함수로 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // setState를 의존성 배열에 추가

  return (
    <main className={container} onClick={handleClickContainer}>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
