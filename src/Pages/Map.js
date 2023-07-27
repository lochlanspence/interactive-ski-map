import Navbar from '../Components/Nav.js';
import styles from '../Map.module.css';
import primary_logo_black from '../images/Remarkables-BlackOut.png';
import TrailMap from '../images/Remarkables_Trail_Map.png';
import { useRef, useState, useLayoutEffect, useCallback, useEffect } from 'react';
import Tile from '../Components/Tile.js';

function Map() {
  // Dimensions of the map image used for calculating the scale for positioning tiles
  const MapWidth = 2048;
  const MapHeight = 1259;

  // reference to the HTML element that contains the map image
  const mapRef = useRef(null);

  // state management for the list of tiles to overlay on the map image
  const [tiles, setTiles] = useState([]);

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

    scaleX.current = MapWidth / rect.width;
    scaleY.current = MapHeight / rect.height;
  }, [MapWidth, MapHeight]);

  // Function to handle window resize
  const handleWindowResize = useCallback(() => {
    setScale();
  }, [setScale]);

  useEffect(() => {
    setScale();
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('focus', handleWindowFocusChange); // Listen for window focus change
    window.addEventListener('blur', handleWindowFocusChange);  // Listen for window blur change
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('focus', handleWindowFocusChange);
      window.removeEventListener('blur', handleWindowFocusChange);
    };
  }, [setScale, handleWindowResize, handleWindowFocusChange]);

  const getUniqueId = () => {
    return parseInt(Date.now())
  }

  function handleMapClick(e) {
    // Check if the window is currently focused before proceeding
    if (!isWindowFocused) {
      return;
    }

    const map = mapRef.current;
    const rect = map.getBoundingClientRect();

    // scale position: (first adjust, then scale)
    const mouseX = Math.round((e.clientX - rect.left) * scaleX.current);
    const mouseY = Math.round((e.clientY - rect.top) * scaleY.current);

    const tile = {
      id: getUniqueId(),
      x: mouseX,
      y: mouseY,
      title: `mouseX: ${mouseX}, mouseY: ${mouseY} Hello World`
    };

    const newTiles = [...tiles, tile];
    setTiles(newTiles);
  }

  return (
    <div className="Map">
      <Navbar logo={primary_logo_black} />
      <div ref={mapRef}>
        <div className={styles.map_container} onClick={handleMapClick}>
          {tiles.map(t => {
            // calculate the x/y values based on the current scale of the map image
            const x = Math.round(t.x / scaleX.current);
            const y = Math.round(t.y / scaleY.current);
            return (
              <Tile key={t.id} tile={t} x={x} y={y} />
            )
          })}
          <img src={TrailMap} alt="Trail Map" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Map;
