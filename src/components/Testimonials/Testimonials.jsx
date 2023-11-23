import React from 'react'
import "./Testimonials.css"
import { testimonial1, testimonial2, testimonial3 } from "../../assets/index";

const Testimonials = () => {
  const testimonialData = [
    {
      img: testimonial1,
      userName: "Peter Adams",
      userComment: "This is a great course. I got to learn a lot."
    },
    {
      img: testimonial2,
      userName: "Robert Fox",
      userComment: "I got to learn a lot about Music Production with this course. Thanks :)"
    },
    {
      img: testimonial3,
      userName: "Emily Smith",
      userComment: "Awesome! Great job!!"
    }
  ]
  return (
    <section className='testimonials' id='testimonials'>
      <div className="wrapper">
        <div className="testimonials-header">
          <h1 className="testimonials-header__text">What our students say?</h1>
        </div>
        <div className="testimonials-container">
          {
            testimonialData.map((testimonialItem, index) => (
              <div key={index} className="testimonial-item">
                <div className="testimonial-img">
                  <img src={testimonialItem.img} alt={testimonialItem.userName} />
                </div>
                <div className="about">
                  <p className="testimonial-name">
                    {testimonialItem.userName}
                  </p>
                  <p className="testimonial-comment">
                    {testimonialItem.userComment}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Testimonials