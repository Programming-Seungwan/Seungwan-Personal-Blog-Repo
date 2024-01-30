import { navHeader } from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';

export default function NavHeader() {
  return (
    <div className={navHeader}>
      <Link to='/'>
        <FontAwesomeIcon icon={faHome} size='2x' />
      </Link>
      <a href='https://github.com/Programming-Seungwan' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} size='2x' />
      </a>
      <a href='https://www.instagram.com/wan981123/' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faInstagram} size='2x' />
      </a>
    </div>
  );
}
