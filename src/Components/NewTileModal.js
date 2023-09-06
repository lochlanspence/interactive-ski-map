// Description: This file contains the Modal component which is used to display a modal window to the user.
import React, { useState } from 'react';
import styles from '../Modal.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCoffee,
  faStar,
  faTriangleExclamation,
  faInfo,
  faPersonFallingBurst
} from "@fortawesome/free-solid-svg-icons";

// Modal component
function NewTileModal({ onClose, tile, onAddTile }) {
  const [newLogo, setNewLogo] = useState(faClock); // State for the new logo
  const [newSubHeading, setNewSubHeading] = useState(''); // State for the new sub-heading name
  const [newDescription, setNewDescription] = useState(''); // State for the new description


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
  const handleAddClick = () => {
    if (newSubHeading === '') {
      alert('Please enter a title');
      return;
    }
    onAddTile(newLogo, newSubHeading, newDescription); // Call the onAddTile function to place the new tile
    onClose(); // Call the onClose function to close the modal window
  }

  // Return the JSX element
  return (
    <div className={styles.modal} onClick={handleOverlayClick}>
      <div className={styles['modal-content']}>
        {/* Use the tile data to display specific information */}
        <h2>New Event</h2>
        <div className={styles.content_container}>
          {/* Logo Change */}
          <div className={`${styles['input_container']} ${styles['change_logo']}`}>
            <label>Select Event:</label>
            <div className={styles.logo_grid}>
              {/* Font Awesome icons */}
              <div>
                <FontAwesomeIcon
                  icon={faClock}
                  onClick={() => handleLogoClick(faClock)}
                  className={newLogo === faClock ? styles.selected_logo : styles.logo_icon}
                />
                  <p>Queue Time</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCoffee}
                  onClick={() => handleLogoClick(faCoffee)}
                  className={newLogo === faCoffee ? styles.selected_logo : styles.logo_icon}
                />
                  <p>Coffee Wait Time</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  onClick={() => handleLogoClick(faStar)}
                  className={newLogo === faStar ? styles.selected_logo : styles.logo_icon}
                />
                  <p>Special Event</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  onClick={() => handleLogoClick(faTriangleExclamation)}
                  className={newLogo === faTriangleExclamation ? styles.selected_logo : styles.logo_icon}
                />
                <p>Hazard</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faInfo}
                  onClick={() => handleLogoClick(faInfo)}
                  className={newLogo === faInfo ? styles.selected_logo : styles.logo_icon}
                />
                <p>Info</p>
              </div>
              <div>
                <FontAwesomeIcon  
                  icon={faPersonFallingBurst}
                  onClick={() => handleLogoClick(faPersonFallingBurst)}
                  className={newLogo === faPersonFallingBurst ? styles.selected_logo : styles.logo_icon}
                />
                <p>Accident</p>
              </div>
            </div>
          </div>
          <div>
            {/* Sub-heading and description */}
            <div className={styles.input_container}>
              <label>Title:</label>
              <input type="text" value={newSubHeading} onChange={(event) => setNewSubHeading(event.target.value)} />
            </div>
            <div className={styles.input_container}>
              <label>Description:</label>
              <textarea value={newDescription} onChange={(event) => setNewDescription(event.target.value)} />
            </div>
            <div className={styles.button_container}>
             <button className={styles.place_button} onClick={handleAddClick}>Add</button>
            </div>
          </div>
        </div>
        {/* Place buttons */}
        
      </div>
    </div>
  );
}

export default NewTileModal;
