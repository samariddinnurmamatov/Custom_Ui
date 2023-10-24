"use client";
import React, { useState, ChangeEvent } from "react";
import { SelectProps } from "../../types";

const Select: React.FC<SelectProps> = React.memo(({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <select
      value={selectedOption}
      onChange={handleSelectChange}
      className="p-2 border border-gray-200 rounded text-[13px]"
    >
      <option value="">Hohlagan birini tanlang</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = "Select";
export default Select;
