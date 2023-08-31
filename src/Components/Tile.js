import React, { useState } from 'react';
import styles from '../Map.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Tile({ tile, x, y }) {
  const [hovered, setHovered] = useState(false);

  const tileStyle = {
    left: `${x}px`,
    top: `${y}px`,
    position: 'absolute',
  };

  return (
    <div
      className='tile'
      style={tileStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {tile.logo && (
        <div className={styles.logoContainer}>
          <FontAwesomeIcon icon={tile.logo} className={styles.logo} />
          {hovered && (
            <div className={styles.hoverContent}>
              <h3>{tile.title}</h3>
              <p>{tile.description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Tile;
