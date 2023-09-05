// Map.js
import React, { useRef, useState, useCallback, useEffect } from 'react';
import Navbar from '../Components/Nav.js';
import styles from '../Map.module.css';
import primary_logo_black from '../images/Remarkables-BlackOut.png';
import TrailMap from '../images/Remarkables_Trail_Map.png';
import Tile from '../Components/Tile.js';
import Modal from '../Components/Modal.js';

// firebase
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
    databaseURL: "https://interactive-ski-map-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function Map() {
  // Dimensions of the map image used for calculating the scale for positioning tiles
  const MapImage = {
    width: 2048,
    height: 1259,
  };

  // reference to the HTML element that contains the map image
  const mapRef = useRef(null);

  // reference to the Firebase database
  const db = getDatabase();

  // state management for the list of tiles to overlay on the map image
  const [tiles, setTiles] = useState([]);

   // reference to the 'tiles' collection in the firebase realtime database
   const tilesRef = ref(db, 'tiles');  

  // X/Y values to scale the tile positions based on the map size.
  const scaleX = useRef(1.0);
  const scaleY = useRef(1.0);

  // Flag to indicate if the window is currently focused or not
  const [isWindowFocused, setWindowFocused] = useState(true);

  // Function to handle window focus change
  const handleWindowFocusChange = useCallback(() => {
    setWindowFocused(document.hasFocus());
  }, []);

  // Function to calculate the scale values based on the map container's size
  const setScale = useCallback(() => {
    const map = mapRef.current;
    const rect = map.getBoundingClientRect();

    scaleX.current = MapImage.width / rect.width;
    scaleY.current = MapImage.height / rect.height;
  }, [scaleX, scaleY, MapImage.width, MapImage.height]);

  // Function to handle window resize
  const handleWindowResize = useCallback(() => {
    setScale();
  }, [setScale]);

  useEffect(() => {
    // process the list of tiles once retrieved from firebase
    onValue(tilesRef, (snapshot) => {
        const data = snapshot.val();
        
        if (data == null) {
            setTiles([])
        }
        else {
            /*
                convert the records from firebase into an array which we can process
                for rendering, the firebase structure is:

                {
                    123456: {
                        id: 123456,
                        x: 100,
                        y: 100,
                        ...
                    },
                    123457: {
                        id: 123457,
                        x: 100,
                        y: 100,
                        ...
                    },
                    ...
                }

                The following code will convert this to an array:

                [
                    {
                        id: 123456,
                        x: 100,
                        y: 100,
                        ...
                    },
{
                        id: 123457,
                        x: 100,
                        y: 100,
                        ...
                    },
                    ...
                ]
            */
            const array = []
            Object.keys(data).forEach((key) => {
                const item = { ...data[key] }
                array.push(item);
            });             
            setTiles(array)
        }
    });
}, [])    

  // Set the scale values when the component mounts
  useEffect(() => {
    setScale();
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('focus', handleWindowFocusChange); // Listen for window focus change
    window.addEventListener('blur', handleWindowFocusChange); // Listen for window blur change
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('focus', handleWindowFocusChange);
      window.removeEventListener('blur', handleWindowFocusChange);
    };
  }, [setScale, handleWindowResize, handleWindowFocusChange]);

  // Function to generate a unique id for each tile
  const getUniqueId = () => {
    return parseInt(Date.now());
  };

  // Modal state and close function
  const [showModal, setShowModal] = useState(false);
  const [clickedTile, setClickedTile] = useState(null);

  function closeModal() {
    setShowModal(false);
  }

  function handleMapClick(e) {
    // Check if the window is currently focused before proceeding
    if (!isWindowFocused) {
      return;
    }

    // Get the map container's bounding rectangle
    const map = mapRef.current;
    const rect = map.getBoundingClientRect();

    // scale position: (first adjust, then scale)
    const mouseX = Math.round((e.clientX - rect.left) * scaleX.current);
    const mouseY = Math.round((e.clientY - rect.top) * scaleY.current);

    const tile = {
      id: getUniqueId(),
      x: mouseX,
      y: mouseY,
    };

    // Show the modal when a tile is clicked and store the clicked tile data
    setShowModal(true);
    setClickedTile(tile);
  }

  const handlePlace = (logo, subHeading, description) => {
    const newTile = {
      id: getUniqueId(),
      x: clickedTile.x,
      y: clickedTile.y,
      title: `${subHeading}`,
      description: `${description}`,
      logo: logo,
    };

    // save the new tile to firebase
    set(ref(db, 'tiles/' + newTile.id), newTile);
  };

  // Function to update a tile
  const updateTile = (updatedTile) => {
    set(ref(db, 'tiles/' + updatedTile.id), updatedTile);
    setShowModal(false);
  };

  // Function to delete a tile
  const deleteTile = (tileId) => {
    set(ref(db, 'tiles/' + tileId), null);
  };

  return (
    <div className="Map">
      {/*Navbar header*/}
      <Navbar logo={primary_logo_black} />
      <div ref={mapRef}>
        {/*Map image*/}
        <div className={styles.map_container} onClick={handleMapClick}>
          {tiles.map((t) => {
            {/* Scale position: (first scale, then adjust) */}
            const x = Math.round(t.x / scaleX.current);
            const y = Math.round(t.y / scaleY.current);
            return (
              // Render a tile for each item in the tiles array
              <Tile
                key={t.id}
                tile={t}
                x={x}
                y={y}
                onUpdateTile={updateTile}
                onDeleteTile={deleteTile}
              />
            );
          })}
          {/* Render the trail map image */}
          <img src={TrailMap} alt="Trail Map" width="100%" />
        </div>
      </div>
      {showModal && clickedTile && (
        // Render the modal when the showModal flag is true
        <Modal tile={clickedTile} onClose={closeModal} onPlace={handlePlace} />
      )}
    </div>
  );
}

export default Map;
