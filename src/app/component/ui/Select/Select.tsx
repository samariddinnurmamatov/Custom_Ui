"use client";
import React, { useState } from "react";
import { SelectProps } from "../../../types";
import CustomSelectArrow from "../../../assets/svg/CustomSelectArrow";
import CustomSelectOption from "./CustomSelectOption";

const Select: React.FC<SelectProps> = React.memo((props) => {
  const { options, onChange } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    toggleSelect();
    if (onChange) {
      onChange(value);
    }
  };

  const selectButtonClasses = `p-2 border border-gray-200 rounded text-[13px] cursor-pointer flex ${
    selectedOption ? "" : "text-gray-400"
  }`;

  return (
    <div className="relative w-[40%]">
      <div onClick={toggleSelect} className={selectButtonClasses}>
        {selectedOption ? (
          <span>{selectedOption}</span>
        ) : (
          <span className="text-gray-400">Hohlagan birini tanlang</span>
        )}
        <CustomSelectArrow isOpen={isOpen} />
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-[100%] bg-white border border-gray-200 rounded">
          {options.map((option) => (
            <CustomSelectOption
              key={option.value}
              option={option}
              selectedOption={selectedOption}
              onClick={handleOptionClick}
            />
          ))}
        </div>
      )}
    </div>
  );
});

Select.displayName = "Select";
export default Select;
