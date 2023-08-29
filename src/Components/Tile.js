import React from 'react';
import styles from '../Map.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Tile({ tile, x, y }) {
  // Adjust the positioning based on the tile's x and y values
  const tileStyle = {
    left: `${x}px`,
    top: `${y}px`,
    position: 'absolute',
  };

  return (
    <div className='tile' style={tileStyle}>
      {/* Renders the selected logo */}
      {tile.logo && <FontAwesomeIcon icon={tile.logo} className={styles.logo} />}
      <span className={styles.tile_title}>{tile.title}</span>
    </div>
  );
}

export default Tile;
