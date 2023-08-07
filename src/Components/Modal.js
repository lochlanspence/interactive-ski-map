import React from 'react';
import styles from '../Modal.module.css';

function Modal({ onClose, tile }) {
  const handleDeleteClick = () => {
    // Call the onClose function to close the modal
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        {/* Use the tile data to display specific information */}
        <h2>{tile.title}</h2>
        <div className={styles.button_container}>
          {/* Add onClick event handler for the "Delete" button */}
          <p className={styles.delete_button} onClick={handleDeleteClick}>
            Delete
          </p>
          <p className={styles.place_button}>Place</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
