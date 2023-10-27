import React from "react";
import { CustomSelectOptionProps } from "@/app/types";

const CustomSelectOption: React.FC<CustomSelectOptionProps> = ({
  option,
  selectedOption,
  onClick,
}) => {
  const isSelected = option.value === selectedOption;
  const optionClasses = `p-2 cursor-pointer hover:bg-hover-light-gray ${isSelected ? "bg-hover-light-gray" : ""}`;

  const handleOptionClick = () => {
    onClick(option.value);
  };

  return (
    <div
      key={option.value}
      onClick={handleOptionClick}
      className={optionClasses}
    >
      {option.label}
    </div>
  );
};

export default CustomSelectOption;
