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

// "use client";

// import { FC, useState } from "react";
// import { ButtonProps } from "../../types";

// const Button: FC<ButtonProps> = ({
//   type,
//   children,
//   className,
//   buttonVariant,
//   isLoading,
//   ...props
// }) => {
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [isLoading, setIsLoading] = useState(false);

//   const buttonVariants = {
//     success: "bg-green text-white hover:shadow-xl",
//     dangerbtn: "bg-red-primary text-white hover:shadow-xl",
//     warning: "bg-warning text-white hover:shadow-lg",
//     primarybtn: "bg-blue-primary text-white hover:shadow-xl",
//     dark: "bg-dark text-white hover:shadow-xl",

//     default:
//       "border-stroke border-[1px] hover:text-hover-light-blue hover:border-hover-light-blue cursor pointer hover:shadow-lg transform hover:-translate-y-1",
//     primary: "stroke-gray custom-btn btn-3 hover:-translate-y-1", // bg-blue-primary text-light hover:bg-hover-light-blue
//     dangerdefault:
//       "border-red-primary border-[1px] text-red-primary hover:border-hover-red hover:text-hover-red-tx hover:-translate-y-1",
//     disabled:
//       "border-stroke border-[1px] bg-light-gray text-gray cursor-not-allowed",
//     dashed:
//       "border-dashed border-[1px] hover:text-hover-light-blue hover:border-hover-light-blue hover:-translate-y-1",
//     // loading: "border-stroke border-[1px] text-gray",
//   };

//   const buttonClasses = [
//     "p-[8px] px-[20px] rounded-[10px] text-[16px] transition-all",
//     buttonVariants[buttonVariant || "default"] ||
//       "bg-gray-500 hover:bg-gray-700",
//     isLoading ? "opacity-50 cursor-not-allowed" : "",
//     className,
//   ]
//     .filter(Boolean)
//     .join(" ");

//   // const handleClick = () => {
//   //   if (buttonVariant === "loading") {
//   //     setIsLoading(true);
//   //     setTimeout(() => {
//   //       setIsLoading(false);
//   //     }, 2000);
//   //   }
//   // };
//   // const handleClick = () => {
//   //   // Tugmaga bosganda isLoading'ni true qilamiz
//   //   setIsLoading(true);

//   //   // 2 sekunddan so'ng isLoading'ni false qilamiz
//   //   setTimeout(() => {
//   //     setIsLoading(false);
//   //   }, 2000);
//   // };

//   return (
//     <button
//       className={buttonClasses}
//       {...props}
//       // disabled={isLoading}
//     >
//       {/* {isLoading ? "... " : ""} */}
//       <span>
//         {isLoading ? "... " : ""}
//         {children}
//       </span>
//     </button>
//   );
// };

// export default Button;
