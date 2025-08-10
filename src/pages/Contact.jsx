import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLeaf,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    console.log('Submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white my-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-green-900 mb-4"><FaLeaf className='relative lg:left-60 left-20 md:left-60 top-10'></FaLeaf> Contact Us</h1>
        <p className="text-lg text-gray-700">
          Whether it's a question, suggestion, or just a hello — we’d love to hear from you!
        </p>
      </div>

    
      <div className="bg-green-50 p-8 rounded-lg shadow-md max-w-3xl mx-auto space-y-10">
       
        <div className="space-y-6">
          

          <div className="flex items-start">
            <FaPhone className="text-green-800 w-6 h-6 mt-1" />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600">+880 1234 567890<br />Mon-Fri, 9am - 5pm</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaEnvelope className="text-green-800 w-6 h-6 mt-1" />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">info@gardmeet.com<br />garden@meet.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="text-green-800"><FaFacebook size={20} /></a>
              <a href="https://x.com/" className="text-green-800 "><FaTwitter size={20} /></a>
              <a href="https://www.instagram.com/" className="text-green-800 "><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>

        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md border-gray-300 "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full btn px-4 py-2 border rounded-md border-gray-300 "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-3 rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
