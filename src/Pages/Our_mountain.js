import React from 'react'
import Navbar from '../Components/Nav.js'
import '../Our_mountain.module.css';
import primary_logo_black from '../images/Remarkables-BlackOut.png';

function Our_mountain() {
  return (
    <div className='Our_mountain'>
      <Navbar logo={primary_logo_black}/>
    </div>
  )
}

export default Our_mountain