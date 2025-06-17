import React from 'react';
import './About.css';
import about_img from '../../assets/drivelogix_aboutus.jpg';

const About = () => {
  return (
    <div className="about">   
     <div className="about-left">
        <img src={about_img} alt="About Us" className="about-img" />
      </div>   
      <div className="about-right">
        <h2>About Us</h2>
        <h3>Driven by Innovation, Focused on the Auto Industry</h3>
        <p>
          We specialize in software and marketing solutions for service and sales professionals in the automotive
          sector. Our mission is to help you grow your business with modern, effective digital tools.
        </p>
      </div>     
    </div>
  );
};

export default About;
