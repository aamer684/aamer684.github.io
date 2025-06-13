import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className='about-right'>
        <h3>ABOUT US</h3>
        <h2>We are team of experied software engineers</h2>
        <p>
            At TechSolutions, we are dedicated to delivering innovative software 
            solutions tailored to meet your business needs. 
            With a team of experienced developers, designers, and project managers, 
            we strive to exceed expectations and deliver high-quality products
        </p>
      </div>
    </div>
  )
}

export default About
