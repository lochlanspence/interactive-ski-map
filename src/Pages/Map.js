import React from 'react'
import Navbar from '../Components/Nav.js'
import styles from '../Map.module.css';
import primary_logo_black from '../images/Remarkables-BlackOut.png';
import TrailMap from '../images/Remarkables_Trail_Map.png';

function Map() {
  return (
    <div className='Map'>
      <Navbar logo={primary_logo_black}/>
      <div className={styles.map_container}>
        <img src={TrailMap}></img>
      </div>
    </div>
  )
}

export default Map