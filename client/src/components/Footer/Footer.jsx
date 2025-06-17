import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer"> 
   {/*     <div className="footer-top">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#getintouch">Get In Touch</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Innisfil, ON</p>
          <p>Phone: (123) 456-7890</p> 
          <p>Email: info@drivelogix.ca</p>
        </div>

        <div className="footer-section">
           <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div> 
        </div>
      </div>   */}

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Drive Logix Inc. All rights reserved.</p>
      </div>
     </footer>
  );
};

export default Footer;
