// Description: This file contains the navigation bar component.
import React from 'react';
import styles from '../Nav.module.css';
import { Link } from 'react-router-dom';

// Nav component
function Nav({ logo }) {

  return (
    <div>
      <nav>
        {/* List with navbar content */}
        <ul className={styles.navbar}>
          {/* List items */}
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
