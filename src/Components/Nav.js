import React from 'react'
import '../Nav.css';
import primary_logo_white from '../images/NZSki_RM_Logo_01_Primary_White.png'
import { Link, Route, Routes } from "react-router-dom"

function Nav() {
  return (
    <div>
        <nav>
        <ul className='navbar'>
            <Link to="/" className='nav_item_first_child'>
                <img src={primary_logo_white} className='primary_logo_white'></img>
            </Link>
            <Link to="/Our_mountain" class="nav_item">
                Our Mountain
            </Link>
            <Link to="/" class="nav_item">
                Our Staff
            </Link>
            <Link to="/" class="nav_item">
                Contact Us
            </Link>
            <Link to="/" class="primary_button">
                View Map
            </Link>
        </ul>
      </nav>
      
    </div>
    )
}
    

export default Nav