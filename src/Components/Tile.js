import React, { useState } from 'react';
import styles from '../Map.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Tile({ tile, x, y, onUpdateTile }) {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(tile.title); // State for edited title
  const [editedDescription, setEditedDescription] = useState(tile.description); // State for edited description

  const tileStyle = {
    left: `${x}px`,
    top: `${y}px`,
    position: 'absolute',
  };

  const toggleModal = () => {
    setShowModal(!showModal);
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
  const handleConfirmEdit = () => {
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

  const toggleModalAndResetHover = () => {
    setHovered(false);
    toggleModal();
  }

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
            <div className={styles.hoverContent} onClick={(e) => e.stopPropagation()}>
              <h3>{tile.title}</h3>
              <p>{tile.description}</p>
              <button onClick={toggleModalAndResetHover}>Edit Widget</button>
            </div>
          )}
        </div>
      )}

      {showModal && (
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modal_content}>
            <div className={styles.input_container}>
              <label>Sub-heading:</label>
              <input
                type="text"
                value={editedTitle}
                onChange={handleTitleChange}
              />
            </div>
            <div className={styles.input_container}>
              <label>Description:</label>
              <textarea
                value={editedDescription}
                onChange={handleDescriptionChange}
              />
            </div>
            <button onClick={handleConfirmEdit} className={styles.edit_button}>
              Confirm Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tile;
