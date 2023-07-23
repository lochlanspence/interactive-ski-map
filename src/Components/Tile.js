import React from 'react';
import styles from '../Map.module.css';

function Tile({ tile, x, y }) {
  return (
    <div
      className={styles.tile}
      style={{
        left: x,
        top: y,
      }}
    >
      {tile.title}
    </div>
  );
}

export default Tile;
