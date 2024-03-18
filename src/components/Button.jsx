import React from "react";

const Button = ({ styles }) => (
  <a href="https://www.arcanepathtech.codes/internship.html" target="_blank" rel="noopener noreferrer" className={`button-link ${styles}`}>
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>
      Apply Now
    </button>
  </a>
);

export default Button;
