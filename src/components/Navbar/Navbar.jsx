import React from 'react'
import "./Navbar.css"
import { menuIcon, closeIcon } from "../../assets/index"
import { useState } from 'react'
const Navbar = () => {
  const items = ["Course Details", "ABOUT", "Blog", "Testimonials"];
  const ids = ["#topics","#info","#blog","#testimonials"]
  const [menuOpened,setMenuOpened] = useState(false);
  const handeClick = () => {
    setMenuOpened(!menuOpened);
    console.log(menuOpened)
  }
  return (
    <div className="div">
      <div className={menuOpened ? "toggle-menu active" : "toggle-menu"}>
        <div className="close-icon" onClick={() => setMenuOpened(false)}>
          <img src={closeIcon} alt="close icon" />
        </div>
        <div>
          {
            items.map((item, index) => (
              <a key={index} href={ids[index]}>
                {item}
              </a>
            ))
          }
        </div>
      </div>
      <nav className='navbar'>
        <a href="#" className="logo">
          Sound <span className="red">DZign</span>
        </a>
        <ul>
          <li>About</li>
          <li>Course Details</li>
          <li>Blog</li>
          <li>Testimonials</li>
        </ul>
        <div className="toggle-button" onClick={() => handeClick()}>
          <img src={menuIcon} alt="open icon" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar