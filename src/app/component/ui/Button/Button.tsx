import React, { FC } from "react";
import { ButtonProps, buttonVariantss } from "../../../types";
import LoadingButtonContent from "./allbtnstyle";

const defaultButtonClass =
  "p-[8px] px-[20px] rounded-[10px] text-[16px] transition-all";

const Button: FC<ButtonProps> = (props) => {
  const {
    type,
    children,
    className,
    buttonVariant = "default",
    isLoading,
    ...restProps
  } = props;

  const variantClass =
    buttonVariantss[buttonVariant] || "bg-gray-500 hover-bg-gray-700";
  const loadingClass = isLoading ? "opacity-50 cursor-not-allowed" : "";
  const buttonClass =
    `${defaultButtonClass} ${variantClass} ${loadingClass} ${className}`.trim();

  return (
    <button className={buttonClass} type={type} {...restProps}>
      {isLoading ? (
        <LoadingButtonContent>{children}</LoadingButtonContent>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};

export default Button;