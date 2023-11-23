import React from 'react'
import "./Info.css"
import { studentIcon, videoIcon, bgElement2 } from "../../assets/index"

const Info = () => {
  return (
    <section className='info' id='info'>
      <div className="wrapper">
        <div className="student">
          <img src={studentIcon} alt="student icon" />
          <h3 className="number">23,000+</h3>
          <p>Students</p>
        </div>
        <div className="video-icon">
          <img src={videoIcon} alt="video icon" />
          <h3 className="hours">26 Hrs</h3>
          <p>Video Content</p>
        </div>
        <img src={bgElement2} className='bg-image' alt="" />
      </div>
    </section>
  )
}

export default Info