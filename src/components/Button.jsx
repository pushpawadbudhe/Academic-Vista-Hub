// import React from "react";

// const Button = ({ styles }) => (
//   <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none  hover:text-white ${styles}`}>
//     Apply Now
//   </button>
// );

// export default Button;

import React from "react";

const Button = ({ styles, link }) => (
  <a href="https://linktr.ee/academicvistahub" target="_blank" rel="noopener noreferrer">
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none hover:text-white ${styles}`}>
      Apply Now
    </button>
  </a>
);

export default Button;
