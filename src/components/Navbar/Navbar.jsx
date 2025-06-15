import React, { useEffect, useState } from 'react'
import './Navbar.css'
/* import logo from '../../assets/mylogo.png' */

const Navbar = () => {
  const[sticky, setSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
    setSticky(window.scrollY > 50);
    };
  window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
   
   return (
    <nav className={`${sticky? 'dark-nav':'' }`}>
     {/*  <img src={logo} alt="" className='logo'/> */}
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="#services">Services</a></li> 
        <li>Portfolio</li>
        <li><a href="#about">About</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#industries">Industries</a></li>        
        <li><a href="#ourwork">Our Work</a></li>  
        <li><a href="#getintouch">Get In Touch</a></li>  
        
      </ul>
    </nav>
  ) 
}

export default Navbar


