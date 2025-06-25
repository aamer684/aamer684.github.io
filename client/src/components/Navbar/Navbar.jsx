import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Navbar.css'
import logo from '../../assets/drivelogix_logo.png'

const Navbar = () => {
  const[sticky, setSticky] = useState(false);
  
useEffect(() => {
  const handleScroll = () => {
    setSticky(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

    
   const navigate = useNavigate();

 const handleScrollTo = (sectionId) => {
  if (sectionId === 'home') { // Or 'top', whatever you prefer to call it
    window.scrollTo({
      top: 0, // Scrolls to the very top of the page
      behavior: 'smooth' // For a smooth scroll animation
    });
  } else {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Aligns the top of the element with the top of the viewport
      });
    }
  }
};

   return (
    <nav className={`nav ${sticky? 'dark-nav':'' }`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        
        <li><a onClick={() => handleScrollTo('home')} className="nav-link">Home</a></li>
        <li><a onClick={() => handleScrollTo('services')} className="nav-link">Services</a></li>
        <li><a onClick={() => handleScrollTo('technologies')} className="nav-link">Technologies</a></li>
        <li><a onClick={() => handleScrollTo('industries')} className="nav-link">Industries</a></li>
        <li><a onClick={() => handleScrollTo('getintouch')} className="nav-link">Get In Touch</a></li>
        <li><a onClick={() => handleScrollTo('about')} className="nav-link">About Us</a></li>

{/*           <li><a href="">Home</a></li>
<li><a href="#services">Services</a></li>            
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#industries">Industries</a></li>                
        <li><a href="#getintouch">Get In Touch</a></li>  
         <li><a href="#about">About Us</a></li> */}
        
      </ul>
    </nav>
  ) 
}

export default Navbar


