// Description: This file contains the Modal component which is used to display a modal window to the user.
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

// Modal component
function Modal({ onClose, tile, onPlace }) {
  const [newLogo, setNewLogo] = useState(''); // State for the new logo
  const [newSubHeading, setNewSubHeading] = useState(''); // State for the new sub-heading name
  const [newDescription, setNewDescription] = useState(''); // State for the new description

  // Event handler for the delete button
  const handleDeleteClick = () => {
    onClose(); // Call the onClose function to close the modal window
  };


  // Event handler for the logo click
  const handleLogoClick = (logo) => {
    setNewLogo(logo); // Update the newLogo state with the selected logo
  };


  // Event handler for the overlay click
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose(); // Call the onClose function to close the modal window
    }
  }

  // Event handler for the place button
  const handlePlaceClick = () => {
    onPlace(newLogo, newSubHeading, newDescription); // Call the onPlace function to place the new tile
    onClose(); // Call the onClose function to close the modal window
  }

  // Return the JSX element
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
              {/* Font Awesome icons */}
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
            {/* Sub-heading and description */}
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
        {/* Delete and place buttons */}
        <div className={styles.button_container}>
          <p className={styles.delete_button} onClick={handleDeleteClick}>
            Delete
          </p>
          <p className={styles.place_button} onClick={handlePlaceClick}>Place</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
