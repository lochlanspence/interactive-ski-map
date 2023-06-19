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
          <div className='our_features'>
            <h3>Discover the exceptional features that make The Remarkables mountain a must-visit destination:</h3>
            <a href='#'>Learn More</a>
          </div>
      </div>
      <div className='features_grid'>
          <div className='stash'>
            <h4>The Stash</h4>
            <img src={stash} alt='Stash'></img>
            <p>The Stash, a dedicated freestyle terrain park, perfect for snowboarders and freeskiers looking to push their limits.</p>
          </div>
          <div className='icebar'>
            <h4>Ice Bar</h4>
            <img src={ice_bar_closeup} alt='Ice Bar'></img>
            <p>State-of-the-art Ice Bar offering refreshing beverages in a unique alpine setting.</p>
          </div>
          <div className='sightseeing'>
            <h4>Sightseeing</h4>
            <img src={sightseeing} alt='sightseeing'></img>
            <p>Stunning panoramic views of the surrounding mountains and Queenstown's picturesque landscapes.</p>
          </div>
          <div className='tubing'>
            <h4>Tubing</h4>
            <img src={tubing} alt='tubing'></img>
            <p>Exciting tubing slope for thrilling snow tubing adventures with friends and family.</p>
          </div>
      </div>
      <div className='footer'>
        <p>© The Remarkables 2023. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
