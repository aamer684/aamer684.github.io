
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
    // Replace this with your email service logic (e.g., EmailJS, backend API)
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
        };

    return (
        <div className="getintouch-container">
            <h2>Contact Us</h2>
            <p>Have a question or need a quote? Send us a message below.</p>
            <form onSubmit={handleSubmit} className="getintouch-form">
            <input type="text"  name="name"  placeholder="Your Name"
                value={formData.name} onChange={handleChange}  required
                />
            <input type="email" name="email" placeholder="Your Email" value={formData.email}    
            onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message"
                value={formData.message} onChange={handleChange}
                required />
            <button type="submit">Send Message</button>
</form>
</div>
);
};

export default GetInTouch;
