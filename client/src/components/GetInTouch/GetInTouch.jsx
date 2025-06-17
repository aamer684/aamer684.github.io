
import React, { useState } from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
    });

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email.includes('@')) {
    alert('Please enter a valid name and email.');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert(result.message || 'Something went wrong');
    if (response.ok) {
      setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    alert('Failed to send message. Please try again later.');
  }
};


    return (
        <div className="getintouch-container">
        <div className="getintouch-content">        
    <form onSubmit={handleSubmit} className="getintouch-form">
        <p>Fill out the form below and our team will get back to you shortly.</p>
        <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            />
            <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            />
            <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            />
            <button type="submit">Send Message</button>
        </form>
        <div className="getintouch-info">
        <h2>Get In Touch</h2>
            <p>Looking for expert web development, mobile apps, or digital marketing tailored for auto mechanics, tire shops, or auto parts dealers?
            Our team specializes in helping automotive businesses thrive online. Reach out today and discover how we can accelerate your digital success. 
            </p>                
        </div>
        </div>
        </div>
    );
};

export default GetInTouch;
