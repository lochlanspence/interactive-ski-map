import Navbar from '../Components/Nav.js';
import styles from '../Map.module.css';
import primary_logo_black from '../images/Remarkables-BlackOut.png';
import TrailMap from '../images/Remarkables_Trail_Map.png';
import {useRef} from 'react';

function Map() {
  const MapWidth = 1600;
  const MapHeight = 900;
  const mapRef = useRef(null);
  function handleMapClick(e) {
    const map = mapRef.current;

    var rect = map.getBoundingClientRect();
    var scaleX = map.width / rect.width;
    var scaleY = map.height / rect.height;

    var mouseX = Math.round(e.clientX - rect.left) * scaleX;
    var mouseY = Math.round(e.clientY - rect.top) * scaleY;

    alert(`x:${mouseX}, y:${mouseY}  mousex:${e.clientX}, mousey:${e.clientY}`);
  }

  return (
    <div className="Map" ref={mapRef}>
      <Navbar logo={primary_logo_black} />
      <div className={styles.map_container} onClick={handleMapClick}>
        <img src={TrailMap} alt="Trail Map" />
      </div>
    </div>
  );
}

export default Map;
