import React from "react";
import Button from "@/app/component/ui/Button/Button";
import { ButtonVariant } from "@/app/types";


interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  isLoading: boolean;
  onClick: () => void;
}

const MyButton: React.FC<ButtonProps> = ({
  text,
  variant,
  isLoading,
  onClick,
}) => {
  return (
    <Button
      type="button"
      buttonVariant={variant}
      className="w-[100%]"
      isLoading={isLoading}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default MyButton;
