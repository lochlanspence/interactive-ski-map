// Description: This file contains the Tile component which is used to render a tile on the map.
import React, { useState } from 'react';
import styles from '../Map.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { set } from 'firebase/database';

// Tile component
function Tile({ tile, x, y, onUpdateTile, onDeleteTile }) {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(tile.title); // State for edited title
  const [editedDescription, setEditedDescription] = useState(tile.description); // State for edited description


  // Style for the tile
  const tileStyle = {
    left: `${x}px`,
    top: `${y}px`,
    position: 'absolute',
  };

  // Event handler for input value changes
  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  // Event handler for textarea value changes
  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  // Event handler for confirming the edit
  const handleSave = () => {
    // Update the tile with the edited values
    const updatedTile = {
      ...tile,
      title: editedTitle,
      description: editedDescription,
    };

    // Call the onUpdateTile callback to update the parent component's state
    onUpdateTile(updatedTile);

    // Close the modal
    setShowModal(false);
  };

  // Event handler for the modal toggle
  const handleEdit = () => {
    setHovered(false);
    setShowModal(true);
  }

  // Event handler for the modal toggle and delete tile
  const handleDeleteTile = () => {
    setShowModal(false);
    onDeleteTile(tile.id);
  }

  // Event handler for the overlay click
  const handleOverlayClick = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  }

  return (
    <div
      className='tile'
      style={tileStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Render the tile content */}
      {tile.logo && (
        <div className={styles.logoContainer}>
          <FontAwesomeIcon icon={tile.logo} className={styles.logo} />
          {/* Render the hover content */}
          {hovered && (
            <div className={styles.hoverContent} onClick={(e) => e.stopPropagation()}>
              <h3>{tile.title}</h3>
              <p>{tile.description}</p>
              <button className={styles.hoverEditButton} onClick={handleEdit}>Edit</button>
            </div>
          )}
        </div>
      )}

      {showModal && (
        <div className={styles.modal} onClick={handleOverlayClick}>
          {/* Render the modal content */}
          <div className={styles.modal_content}>
            <div className={styles.input_container}>
              <label>Sub-heading:</label>
              {/* Render the input field */}
              <input
                type="text"
                value={editedTitle}
                onChange={handleTitleChange}
              />
            </div>
            <div className={styles.input_container}>
              <label>Description:</label>
              {/* Render the textarea field */}
              <textarea
                value={editedDescription}
                onChange={handleDescriptionChange}
              />
            </div>
            {/* Render the buttons */}
            <div className={styles.button_container}>
            <button onClick={handleSave} className={styles.edit_button}>
              Save
            </button>
            <button onClick={handleDeleteTile} className={styles.delete_button}>
              Delete
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tile;
