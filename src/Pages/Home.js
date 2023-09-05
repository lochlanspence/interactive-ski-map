// Description: This page contains the home page of the website.
import React from 'react';
import styles from '../Home.module.css';
import ice_bar from '../images/ice-bar-wide-shot.jpeg';
import sightseeing from '../images/sightseeing.jpg';
import tubing from '../images/tubing.jpg';
import stash from '../images/Stash.jpg';
import ice_bar_closeup from '../images/ice-bar-closeup.jpg';
import Navbar from '../Components/Nav.js';
import primary_logo_white from '../images/NZSki_RM_Logo_01_Primary_White.png';

function Home() {
  return (
    <div className={styles.App}>
      {/*Navbar header*/}
      <div className={styles.header}>
        <Navbar logo={primary_logo_white}/>
        <div className={styles.landing}>
          {/* landing text */}
          <h1 className={styles.heading}>The Remarkables</h1>
          <p>Queenstown's Adventure Playground</p>
        </div>
      </div>
      {/*Mountain features*/}
      <div className={`${styles.mountain_features} ${styles['sub-div']}`}>
        <h2>Mountain Features</h2>
        <div>
          <img src={ice_bar} alt='Ice Bar' />
        </div>
        <div className={styles.our_features}>
          <h3>Discover the exceptional features that make The Remarkables mountain a must-visit destination:</h3>
        </div>
      </div>
      <div className={styles.features_grid}>
        <div className={styles.stash}>
          <h4>The Stash</h4>
          {/*Stash image and text*/}
          <img src={stash} alt='Stash' />
          <p>The Stash, a dedicated freestyle terrain park, perfect for snowboarders and freeskiers looking to push their limits.</p>
        </div>
        <div className={styles.icebar}>
          <h4>Ice Bar</h4>
          {/*Ice bar image and text*/}
          <img src={ice_bar_closeup} alt='Ice Bar' />
          <p>State-of-the-art Ice Bar offering refreshing beverages in a unique alpine setting.</p>
        </div>
        <div className={styles.sightseeing}>
          <h4>Sightseeing</h4>
          {/*Sightseeing image and text*/}
          <img src={sightseeing} alt='sightseeing' />
          <p>Stunning panoramic views of the surrounding mountains and Queenstown's picturesque landscapes.</p>
        </div>
        <div className={styles.tubing}>
          <h4>Tubing</h4>
          {/*Tubing image and text*/}
          <img src={tubing} alt='tubing' />
          <p>Exciting tubing slope for thrilling snow tubing adventures with friends and family.</p>
        </div>
      </div>
      {/*Footer*/}
      <div className={styles.footer}>
        <p>© The Remarkables 2023. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Home;
