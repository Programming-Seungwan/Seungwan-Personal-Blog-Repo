import { fixedHeaderContainer, hamburgerMenuBar } from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import { hamburgerButtonClickedState } from '../../../../state/atom';

export default function MainContentFixedHeader({ category }) {
  const [isHamburgerButtonClicked, setIsHamburgerButtonClicked] = useRecoilState(hamburgerButtonClickedState);

  function handleClickHamburgerButton() {
    setIsHamburgerButtonClicked(true);
  }

  return (
    <div className={fixedHeaderContainer}>
      <FontAwesomeIcon icon={faBars} size='lg' className={hamburgerMenuBar} onClick={handleClickHamburgerButton} />
      <span>{category}</span>
    </div>
  );
}
