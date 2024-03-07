// ContactUsPopup.js

import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';

const ContactUsPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const emailData = {
      service_id: 'service_rlgsie3',
      template_id: 'template_7apkwp6',
      user_id: 'qE7iNbIq4a_pXkS6b',
      template_params: {
        from_name: name,
        to_email: email,
        message,
      },
    };

    emailjs.send(emailData.service_id, emailData.template_id, emailData.template_params, emailData.user_id)
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setEmailSent(true);
          onClose();
        },
        (error) => {
          console.error('Email sending failed:', error);
        }
      );
  };

  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    // Lock scrolling when the popup is open
    document.body.style.overflow = "hidden";

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unlock scrolling when the popup is closed
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div
        ref={formRef}
        className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <button
          className="absolute top-2 right-2 text-gray-600 cursor-pointer focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        <form onSubmit={handleSubmit} className="bg-opacity-90">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black bg-opacity-70"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black bg-opacity-70"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black bg-opacity-70"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Send
          </button>

          <button
            type="button"
            className="mt-4 text-gray-800 hover:text-white focus:outline-none mx-2"
            onClick={onClose}
          >
            Cancel
          </button>

          {emailSent && (
            <div className="text-green-500 mt-2">
              Email sent successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUsPopup;
