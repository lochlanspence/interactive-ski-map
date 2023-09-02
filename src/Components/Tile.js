import React, { useState } from 'react';
import styles from '../Map.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';

function Tile({ tile, x, y }) {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const tileStyle = {
    left: `${x}px`,
    top: `${y}px`,
    position: 'absolute',
  };

  const toggleModal = () => {
    setShowModal(!showModal);
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
              <button onClick={toggleModal}>Edit Widget</button> {/* Open the modal on button click */}
            </div>
          )}
        </div>
      )}

      {showModal && (
        <Modal onClose={toggleModal} tile={tile} />
      )}
    </div>
  );
}

export default Tile;
