import React from 'react'
import './MainImage.css'
import dark_arrow from '../../assets/dark-arrow.png'
const MainImage = () => {
  return (
    <div className='mainimage container'>
        <div className='mainimage-text'>
        <h1>We are a consulting firm!</h1>
        <p>
            We specialize in developing custom software solutions for businesses of 
            all sizes. Whether you need a web application, mobile app, or 
            enterprise software, we have the expertise to bring your ideas to life.            
        </p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default MainImage


