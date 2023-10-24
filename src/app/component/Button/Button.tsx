"use client";

import { FC, useState } from "react";
import { ButtonProps } from "../../types";

const Button: FC<ButtonProps> = ({
  type,
  children,
  className,
  buttonVariant,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const buttonVariants = {
    default:
      "border-stroke border-[1px] hover:text-hover-light-blue hover:border-hover-light-blue",
    primary: "stroke-gray bg-blue-primary text-light hover:bg-hover-light-blue",
    dangerdefault:
      "border-red-primary border-[1px] text-red-primary hover:border-hover-red hover:text-hover-red-tx",
    disabled:
      "border-stroke border-[1px] bg-light-gray text-gray cursor-not-allowed",
    loading: "border-stroke border-[1px] text-gray",
  };

  const buttonClasses = [
    "p-[10px] rounded-[10px] cursor-pointer text-[17px] transition-all",
    buttonVariants[buttonVariant || "default"] ||
      "bg-gray-500 hover:bg-gray-700",
    isLoading ? "opacity-50 cursor-not-allowed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = () => {
    if (buttonVariant === "loading") {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <button
      className={buttonClasses}
      {...props}
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? "... " : ""}
      {children}
    </button>
  );
};

export default Button;
