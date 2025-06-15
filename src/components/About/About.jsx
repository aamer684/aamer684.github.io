import React from 'react'
import './About.css'
import Title from '../../components/Title/Title'
import about_img from '../../assets/drivelogix_aboutus.jpg'
/* import play_icon from '../../assets/play-icon.png' */

const About = () => {
  return (
    <div className='about'>
       <table className="outer-table">
        <tbody>
          <tr>
            <td>
<div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>       
      </div>
            </td>
            <td>
 <div> 
        <Title title='Driven by Innovation, Focused on the Auto Industry' superTitle='About Us' /> 
        <p>
            We specialize in software and marketing solutions for service and sales professionals in the automotive
            sector. Our mission is to help you grow your business with modern, effective digital tools.
        </p>
      </div>
            </td>
          </tr>      
     </tbody>
      </table>
      </div>
  )
}

export default About
