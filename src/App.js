import './App.css';
import primary_logo_white from './images/NZSki_RM_Logo_01_Primary_White.png'
import primary_logo_black from './images/Remarkables-BlackOut.png'
import landing_image from './images/Fri13th-Snowshoot-15.jpg'
import ice_bar from './images/ice-bar-wide-shot.jpeg'

function App() {
  return (
    <div classNameName="App">
      <div className="header">
        <nav>
          <ul className="navbar">
            <li><a href="#"><img src={primary_logo_white} alt="Primary White Logo" className="primary_logo_white"></img></a></li>
            <li><a href="#" className="nav_item">Our Mountain</a></li>
            <li><a href="#" className="nav_item">Our Staff</a></li>
            <li><a href="#" className="nav_item">Contact Us</a></li>
            <li><a href="#" className="primary_button">View Map</a></li>
          </ul>
        </nav>
        <div className="landing">
          <h1>The Remarkables</h1>
          <p>Queenstown's Adventure Playground</p>
        </div>
      </div>
      <div className="mountain_features sub-div">
          <h2>Mountain Features</h2>
          <div>
          <img src={ice_bar} alt='Ice Bar'></img>
          </div>
          <div className='text'>
            <p>Placholder text about mountain features</p>
            <a href='#'>Learn More</a>
          </div>
      </div>
    </div>
  );
}

export default App;
