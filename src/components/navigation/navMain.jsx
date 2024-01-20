import * as React from 'react';
import { navMain } from './navbar.module.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faAddressCard,
  faBaseball,
  faComputer,
  faMicrochip,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';

export default function Navmain() {
  return (
    <div className={navMain}>
      <span>Seungwan Blog</span>
      <Link to='/about'>
        <FontAwesomeIcon icon={faAddressCard} size='2x' />
        <span>나, 김승완</span>
      </Link>
      <Link to='/frontend'>
        <FontAwesomeIcon icon={faComputer} size='2x' />
        <span>프론트엔드 개발 이야기</span>
      </Link>
      <Link to='/tech'>
        <FontAwesomeIcon icon={faMicrochip} size='2x' />
        <span>기타 개발 이야기</span>
      </Link>
      <Link to='/sports'>
        <FontAwesomeIcon icon={faBaseball} size='2x' />
        <span>스포츠</span>
      </Link>
      <Link to='/travel'>
        <FontAwesomeIcon icon={faPlaneDeparture} size='2x' />
        <span>여행</span>
      </Link>
    </div>
  );
}
