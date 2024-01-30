import { navBar, hamburgerButtonClickedNavBar } from './navbar.module.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NavHeader from './navHeader';
import Navmain from './navMain';
import NavFooter from './navFooter';
import { useRecoilState } from 'recoil';
import { hamburgerButtonClickedState } from '../../state/atom';

export default function Navbar() {
  const [isHamburgerButtonClicked, setIsHamburgerButtonClicked] = useRecoilState(hamburgerButtonClickedState);

  return (
    <div className={!isHamburgerButtonClicked ? navBar : hamburgerButtonClickedNavBar}>
      <NavHeader />
      <Navmain />
      <NavFooter />
    </div>
  );
}
