import React, { useState } from 'react';
import styles from '../Modal.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faClock,
  faCoffee,
  faStar,
  faCircleXmark,
  faExclamation,
  faUserSlash
} from "@fortawesome/free-solid-svg-icons";

function Modal({ onClose, tile }) {
  const [newLogo, setNewLogo] = useState(''); // State for the new logo
  const [newSubHeading, setNewSubHeading] = useState(''); // State for the new sub-heading name
  const [newDescription, setNewDescription] = useState(''); // State for the new description

  const handleDeleteClick = () => {
    onClose(); // Call the onClose function to close the modal window
  };

  const handleLogoClick = (logo) => {
    setNewLogo(logo); // Update the newLogo state with the selected logo
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose(); // Call the onClose function to close the modal window
    }
  }

  return (
    <div className={styles.modal} onClick={handleOverlayClick}>
      <div className={styles['modal-content']}>
        {/* Use the tile data to display specific information */}
        <h2>Create Widget </h2>
        <div className={styles.content_container}>
          {/* Logo Change */}
          <div className={`${styles['input_container']} ${styles['change_logo']}`}>
            <label>Change Logo:</label>
            <div className={styles.logo_grid}>
              <FontAwesomeIcon
                icon={faClock}
                onClick={() => handleLogoClick(faClock)}
                className={newLogo === faClock ? styles.selected_logo : styles.logo_icon}
              />

              <FontAwesomeIcon
                icon={faCoffee}
                onClick={() => handleLogoClick(faCoffee)}
                className={newLogo === faCoffee ? styles.selected_logo : styles.logo_icon}
              />

              <FontAwesomeIcon
                icon={faStar}
                onClick={() => handleLogoClick(faStar)}
                className={newLogo === faStar ? styles.selected_logo : styles.logo_icon}
              />

              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={() => handleLogoClick(faCircleXmark)}
                className={newLogo === faCircleXmark ? styles.selected_logo : styles.logo_icon}
              />

              <FontAwesomeIcon
                icon={faExclamation}
                onClick={() => handleLogoClick(faExclamation)}
                className={newLogo === faExclamation ? styles.selected_logo : styles.logo_icon}
              />

              <FontAwesomeIcon
                icon={faUserSlash}
                onClick={() => handleLogoClick(faUserSlash)}
                className={newLogo === faUserSlash ? styles.selected_logo : styles.logo_icon}
              />
            </div>
          </div>
          <div>
            <div className={styles.input_container}>
              <label>Sub-heading:</label>
              <input type="text" value={newSubHeading} onChange={(event) => setNewSubHeading(event.target.value)} />
            </div>
            <div className={styles.input_container}>
              <label>Description:</label>
              <textarea value={newDescription} onChange={(event) => setNewDescription(event.target.value)} />
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
