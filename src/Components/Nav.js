import React from 'react';
import styles from '../Nav.module.css';
import { Link, useLocation } from 'react-router-dom';

function Nav({ logo }) {
  const location = useLocation();
  const isOurMountainPage = location.pathname === '/Our_mountain';

  return (
    <div>
      <nav>
        <ul className={styles.navbar}>
          <Link to="/" className={styles.nav_item_first_child}>
            <img src={logo} className={styles.primary_logo_white} alt="Primary Logo" />
          </Link>
          <Link to="/Our_mountain" className={`${styles.nav_item} ${isOurMountainPage ? styles.black_text : ''}`}>
            Our Mountain
          </Link>
          <Link to="/" className={`${styles.nav_item} ${isOurMountainPage ? styles.black_text : ''}`}>
            Our Staff
          </Link>
          <Link to="/" className={`${styles.nav_item} ${isOurMountainPage ? styles.black_text : ''}`}>
            Contact Us
          </Link>
          <Link to="/" className={styles.primary_button}>
            View Map
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
