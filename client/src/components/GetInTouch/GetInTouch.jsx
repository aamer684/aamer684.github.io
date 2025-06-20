
import React, { useState } from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
   const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  company: '',
  inquiryType: '',
  contactMethod: '',
  referral: '',
  message: '',
  consent: false
});

const initForm = () =>{
  setFormData({ name: '',  email: '',  phone: '',  company: '',  inquiryType: '',
  contactMethod: '',  referral: '',  message: '',
  consent: false });  
}

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email.includes('@')) {
    alert('Please enter a valid name and email.');
    return;
  }
  setLoading(true); // Start loading
  try {
    console.log(JSON.stringify(formData))
    alert(JSON.stringify(formData))
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
console.log(JSON.stringify(formData));
    const result = await response.json();
    alert(result.message || 'Something went wrong');
    if (response.ok) {
      initForm();
      //setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    alert('Failed to send message. Please try again later.');    
  }
  finally{
    setLoading(false); // Stop loading
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
  <input
    type="tel"
    name="phone"
    placeholder="Your Phone Number"
    value={formData.phone}
    onChange={handleChange}
    required
  />
  <input
    type="text"
    name="company"
    placeholder="Company Name"
    value={formData.company}
    onChange={handleChange}
  />
  <select
    name="inquiryType"
    value={formData.inquiryType}
    onChange={handleChange}
    required
  >
    <option value="">Select Inquiry Type</option>
    <option value="web">Web Development</option>
    <option value="mobile">Mobile App</option>
    <option value="marketing">Digital Marketing</option>
    <option value="other">Other</option>    
  </select>
  <select
    name="contactMethod"
    value={formData.contactMethod}
    onChange={handleChange}
    required
  >
    <option value="">Preferred Contact Method</option>
    <option value="email">Email</option>
    <option value="phone">Phone</option>
  </select>
  <input
    type="text"
    name="referral"
    placeholder="How did you hear about us?"
    value={formData.referral}
    onChange={handleChange}
  />
  <textarea
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    required
  />
  <label>
    <input
      type="checkbox"
      name="consent"
      checked={formData.consent}
      onChange={(e) =>
        setFormData({ ...formData, consent: e.target.checked })
      }
      required
    />
    I agree to the privacy policy.
  </label>
  <button type="submit">
    {loading ? 'Sending...' : 'Send Message'}
  </button>
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
