// import React, { useState } from "react";
// import emailjs from '@emailjs/browser';

// const ContactUsForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [emailSent, setEmailSent] = useState(false);
//   const [formInteraction, setFormInteraction] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//     // Set formInteraction to true when any field is changed
//     setFormInteraction(true);

//     // Reset emailSent to false when any field is changed
//     setEmailSent(false);
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });

//     // Reset formInteraction to false when the form is reset
//     setFormInteraction(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, email, message } = formData;

//     const emailData = {
//       service_id: 'service_rlgsie3',
//       template_id: 'template_7apkwp6',
//       user_id: 'qE7iNbIq4a_pXkS6b',
//       template_params: {
//         from_name: name,
//         to_email: email,
//         message,
//       },
//     };

//     emailjs.send(emailData.service_id, emailData.template_id, emailData.template_params, emailData.user_id)
//       .then(
//         (response) => {
//           console.log('Email sent successfully:', response);
//           setEmailSent(true);
//           resetForm(); // Reset form fields after email is sent
//         },
//         (error) => {
//           console.error('Email sending failed:', error);
//         }
//       );
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md pt-15 mx-auto mt-8 p-8 border border-cyan-800 rounded-md shadow-md bg-gradient-to-r from-slate-950 to-primary-800 backdrop-saturate-200">
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-sm font-medium text-gray-100">
//           Name:
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black font-medium bg-gray-100"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-100">
//           Email:
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black font-medium bg-gray-100"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="message" className="block text-sm font-medium text-gray-100">
//           Message:
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           rows="4"
//           className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black font-medium bg-gray-100"
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         className="bg-slate-900 text-white mt-2 py-2 px-4 rounded-md border border-cyan-800  hover:bg-cyan-950 focus:outline-none focus:ring focus:border-blue-300"
//       >
//         Send
//       </button>

//       {emailSent && !formInteraction && (
//         <div className="text-cyan-500 mt-2">
//           Email sent successfully!
//         </div>
//       )}
//     </form>
//   );
// };

// export default ContactUsForm;

import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import styles from "../style";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);
  const [formInteraction, setFormInteraction] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setFormInteraction(true);
    setEmailSent(false);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setFormInteraction(false);
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
          resetForm();
        },
        (error) => {
          console.error('Email sending failed:', error);
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center max-w-4xl mx-auto mt-8">
      {/* Left side: Heading */}
      <div className="lg:w-1/3 w-full p-4 lg:pl-0 lg:text-left text-center">
        <div className={`${styles.heading1} `}>Contact Us</div>
      </div>

      {/* Right side: Form */}
      <div className="lg:w-2/3 w-full">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto lg:ml-auto lg:mr-0 p-8 border border-cyan-800 rounded-md shadow-md bg-gradient-to-r from-slate-950 to-primary-800 backdrop-saturate-200">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-100">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black font-medium bg-gray-100"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-100">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black font-medium bg-gray-100"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-100">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black font-medium bg-gray-100"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-slate-900 text-white mt-2 py-2 px-4 rounded-md border border-cyan-800  hover:bg-cyan-950 focus:outline-none focus:ring focus:border-blue-300"
          >
            Send
          </button>

          {emailSent && !formInteraction && (
            <div className="text-cyan-500 mt-2">
              Email sent successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
