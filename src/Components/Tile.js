import React from 'react';
import styles from '../Map.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Tile({ tile, x, y }) {
  return (
    <div className='tile' style={{ left: `${x}px`, top:`${y}px` }}>
      {/*Renders the selected logo */}
      {tile.logo && <FontAwesomeIcon icon={tile.logo} className={styles.logo} />}
      <span className={styles.tile_title}>{tile.title}</span>
    </div>
  );
}

export default Tile;
