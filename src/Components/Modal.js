// In Modal.js
import React from 'react';
import styles from '../Modal.module.css';

function Modal({ onClose, tile }) {
  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        {/* Use the tile data to display specific information */}
        <h2>Modal Content</h2>
      </div>
    </div>
  );
}

export default Modal;
