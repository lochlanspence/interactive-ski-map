import './App.css';
import primary_logo_white from './images/NZSki_RM_Logo_01_Primary_White.png'
import primary_logo_black from './images/Remarkables-BlackOut.png'
import landing_image from './images/Fri13th-Snowshoot-15.jpg'

function App() {
  return (
    <div className="App">
      <div class="header">
        <nav>
          <ul class="navbar">
            <li><a href="#"><img src={primary_logo_white} alt="Primary White Logo" class="primary_logo_white"></img></a></li>
            <li><a href="#" class="nav_item">Our Mountain</a></li>
            <li><a href="#" class="nav_item">Our Staff</a></li>
            <li><a href="#" class="primary_button">View Map</a></li>
          </ul>
        </nav>
        <div class="landing">
          <h1>The Remarkables</h1>
          <p>Queenstown's Adventure Playground</p>
        </div>
      </div>
    </div>
  );
}

export default App;
