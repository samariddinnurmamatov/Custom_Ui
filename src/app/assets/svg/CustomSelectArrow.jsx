import React from "react";

const CustomSelectArrow = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 absolute right-3 transition-transform ${
      isOpen ? "transform rotate-180" : ""
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M2.293 7.293a1 1 0 011.414-1.414L10 13.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 01-.001-1.415z"
      clipRule="evenodd"
    />
  </svg>
);

export default CustomSelectArrow;
