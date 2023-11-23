import React from 'react'
import "./Footer.css"
import { facebookLogo, instagramLogo, twitterLogo } from '../../assets/index'

const Footer = () => {
  return (
    <footer>
      <div className='wrapper'>
        <div className="footer-item">
          <div className="logo">
            Sound<span className='red'>DZign</span>
          </div>
          <div className="icons">
            <img src={facebookLogo} alt="facebook logo" />
            <img src={twitterLogo} alt="twitter logo" />
            <img src={instagramLogo} alt="instagram logo" />
          </div>
          <p className='copyright'>This website is designed by GTCoding Ⓒ 2022</p>
        </div>
        <div className="footer-item">
          <p className="footer-item__title">
            Quick Links
          </p>
          <ul>
            <li>
              Blog
            </li>
            <li>
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <p className="footer-item__title">
            Contact Us
          </p>
          <ul>
            <li>
              contact@email.com
            </li>
            <li>
              +1 999 9999 999
            </li>
          </ul>
        </div>
        <p className='copyright-mobile'>This website is designed by GTCoding Ⓒ 2022</p>

      </div>
    </footer>
  )
}

export default Footer