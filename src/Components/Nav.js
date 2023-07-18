import React from 'react';
import styles from '../Nav.module.css';
import { Link, useLocation } from 'react-router-dom';

function Nav({ logo }) {
  const location = useLocation();
  const isNotHomePage = location.pathname !== '/';

  return (
    <div>
      <nav>
        <ul className={styles.navbar}>
          <Link to="/" className={styles.nav_item_first_child}>
            <img src={logo} className={styles.primary_logo_white} alt="Primary Logo" />
          </Link>
          <Link to="/Our_mountain" className={`${styles.nav_item} ${isNotHomePage ? styles.black_text  : ''} ${isNotHomePage ? styles.black_hover  : ''}`}>
            Our Mountain
          </Link>
          <Link to="/" className={`${styles.nav_item} ${isNotHomePage ? styles.black_text : ''} ${isNotHomePage ? styles.black_hover  : ''}`}>
            Our Staff
          </Link>
          <Link to="/" className={`${styles.nav_item} ${isNotHomePage ? styles.black_text : ''} ${isNotHomePage ? styles.black_hover  : ''}`}>
            Contact Us
          </Link>
          <Link to="/Map" className={styles.primary_button}>
            View Map
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
