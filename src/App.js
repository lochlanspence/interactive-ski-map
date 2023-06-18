import './App.css';
import primary_logo_white from './images/NZSki_RM_Logo_01_Primary_White.png'
import primary_logo_black from './images/Remarkables-BlackOut.png'
import landing_image from './images/Fri13th-Snowshoot-15.jpg'
import ice_bar from './images/ice-bar-wide-shot.jpeg'
import sightseeing from './images/sightseeing.jpg'
import tubing from './images/tubing.jpg'
import stash from './images/Stash.jpg'
import ice_bar_closeup from './images/ice-bar-closeup.jpg'

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
      <div className='features_grid'>
          <div className='stash'>
            <h3>The Stash</h3>
            <img src={stash} alt='Stash'></img>
            <p>Placeholder Text</p>
          </div>
          <div className='icebar'>
            <h3>Ice Bar</h3>
            <img src={ice_bar_closeup} alt='Ice Bar'></img>
            <p>Placeholder Text</p>
          </div>
          <div className='sightseeing'>
            <h3>Sightseeing</h3>
            <img src={sightseeing} alt='sightseeing'></img>
            <p>Placeholder Text</p>
          </div>
          <div className='tubing'>
            <h3>Tubing</h3>
            <img src={tubing} alt='tubing'></img>
            <p>Placeholder Text</p>
          </div>
      </div>
      <div className='footer'>
        <p>© The Remarkables 2023. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
