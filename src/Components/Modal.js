import React, { useState } from 'react';
import styles from '../Modal.module.css';

function Modal({ onClose, tile }) {
  const [newLogo, setNewLogo] = useState(''); // State for the new logo
  const [newSubHeading, setNewSubHeading] = useState(''); // State for the new sub-heading name
  const [newDescription, setNewDescription] = useState(''); // State for the new description

  const handleDeleteClick = () => {
    onClose(); // Call the onClose function to close the modal window
  };

  const handleLogoChange = (event) => {
    setNewLogo(event.target.value); // Update the newLogo state with the new value
  };

  const handleSubHeadingChange = (event) => {
    setNewSubHeading(event.target.value); // Update the newSubHeading state with the new value
  };

  const handleDescriptionChange = (event) => {
    setNewDescription(event.target.value); // Update the newDescription state with the new value
  };

  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        {/* Use the tile data to display specific information */}
        <h2>Create </h2>
        <div className={styles.content_container}>
          {/* Logo Change */}
          <div className={styles['input_container', 'change_logo']}>
            <label>Change Logo:</label>
            <select value={newLogo} onChange={handleLogoChange}>
              <option value="">Select Logo</option>
              <option value="logo1.svg">Logo 1</option>
              <option value="logo2.svg">Logo 2</option>
              <option value="logo3.svg">Logo 3</option>
              {/* Add more options for additional SVG files */}
            </select>
          </div>
          <div>
            <div className={styles.input_container}>
              <label>Sub-heading:</label>
              <input type="text" value={newSubHeading} onChange={handleSubHeadingChange} />
            </div>
            <div className={styles.input_container}>
              <label>Description:</label>
              <textarea value={newDescription} onChange={handleDescriptionChange} />
            </div>
          </div>
        </div>
        <div className={styles.button_container}>
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
