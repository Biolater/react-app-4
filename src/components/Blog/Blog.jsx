import React from 'react'
import "./Blog.css"
import { blog1, blog2, blog3 } from '../../assets'

const Button = ({ children }) => <button className='posts'>{children}</button>

const Blog = () => {
  return (
    <section className='blog' id='blog'>
      <div className="wrapper">
        <div className="blog-header">
          <h1 className="blog-header__text">
            Latest Posts
          </h1>
        </div>
        <div className="blog-container">
          {
            [
              {
                image: blog1,
                tag: "DAW",
                title: "How To Use Drum Machine in Logic Pro X"
              },
              {
                image: blog2,
                tag: "Mixing",
                title: "How To Mix Guitars Effectively"
              },
              {
                image: blog3,
                tag: "Vox",
                title: "The Real Power of Harmonies in Music Production"
              }
            ].map((item, index) => (
              <div key={index} className='blog-item'>
                <div className="blog-img">
                  <img src={item.image} alt={item.tag} />
                </div>
                <div className="tag">
                  {item.tag}
                </div>
                <p className="blog-title">
                  {item.title}
                </p>
              </div>
            ))
          }
        </div>
        <div className="button-container">
          <Button>
            All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog