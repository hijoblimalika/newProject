import React from 'react'
import "./Navbar.css"

function Navbar() {

  return (
    <div className='navbar'>
     <div className="navbar__box1">
      <img src="https://infinizai.netlify.app/img/logo.png" alt="" />
      <ul className="collection">
        <li className="item1">Home</li>
        <li className="item">About</li>
        <li className="item">Team</li>
        <li className="item">Shop</li>
      </ul>
     </div>
     <div className="navbar__box2">
      <ul className="collection">
        <li className="item2">Pages</li>
        <img src="https://infinizai.netlify.app/img/kor.png" alt="" />
        <button className='nav__button'>Contact Us</button>
      </ul>
     </div>
    </div>
  )
}

export default Navbar