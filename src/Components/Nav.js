import React from 'react';
import styles from '../Nav.module.css';
import { Link } from 'react-router-dom';

function Nav({ logo }) {

  return (
    <div>
      <nav>
        <ul className={styles.navbar}>
          <Link to="/" className={styles.nav_item_first_child}>
            <img src={logo} className={styles.primary_logo_white} alt="Primary Logo" />
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
