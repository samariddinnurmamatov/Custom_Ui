import { HTMLProps } from "react";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit";
  isLoading?: boolean;
  buttonVariant?:
    | "success"
    | "dangerbtn"
    | "warning"
    | "primarybtn"
    | "dark"
    | "default"
    | "primary"
    | "dangerdefault"
    | "disabled"
    | "dashed"
};

export const buttonVariants = [
  "success",
  "dangerbtn",
  "warning",
  "primarybtn",
  "dark",
  "primary",
  "default",
  "dashed",
  "dangerdefault",
  "disabled",
];

export type ButtonVariant =
  | "success"
  | "dangerbtn"
  | "warning"
  | "primarybtn"
  | "dark"
  | "dashed"
  | "primary"
  | "default"
  | "dangerdefault"
  | "disabled";


  export const buttonVariantss = {
    success: "bg-green text-white hover:shadow-xl",
    dangerbtn: "bg-red-primary text-white hover:shadow-xl",
    warning: "bg-warning text-white hover:shadow-lg",
    primarybtn: "bg-blue-primary text-white hover:shadow-xl",
    dark: "bg-dark text-white hover:shadow-xl",
    default:
      "border-stroke border-[1px] hover:text-hover-light-blue hover:border-hover-light-blue cursor pointer hover:shadow-lg transform hover:-translate-y-1",
    primary: "stroke-gray custom-btn btn-3 hover:-translate-y-1",
    dangerdefault:
      "border-red-primary border-[1px] text-red-primary hover:border-hover-red hover:text-hover-red-tx hover:-translate-y-1",
    disabled:
      "border-stroke border-[1px] bg-light-gray text-gray cursor-not-allowed",
    dashed:
      "border-dashed border-[1px] hover:text-hover-light-blue hover:border-hover-light-blue hover:-translate-y-1",
  };

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
}

type DataItem = Record<string, any>;

export type Column = {
  key: string;
  header: string;
};

export type CustomTableProps = {
  data: DataItem[];
  columns: Column[];
};

export interface AffixProps {
  top: number;
  children: React.ReactNode;
  // bottom: number;
}

export interface SectionProps {
  title: string;
  content: React.ReactNode;
  py: number;
}

export interface CustomSelectOptionProps {
  option: { value: string; label: string };
  selectedOption: string;
  onClick: (value: string) => void;
}


export interface TooltipProps {
  position: "top" | "bottom" | "left" | "right";
  content: React.ReactNode;
  children: React.ReactNode;
  text: string | undefined;
}


export interface TooltipButtonProps {
  position: "top" | "bottom" | "left" | "right";
  text: string;
  content: string;
}

export interface SpinnerProps {
  variant: string;
  width: string;
  height: string;
}

export const options = [
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Bmw", label: "Bmw" },
  { value: "Jentra", label: "Jentra" },
];

export const data = [
  { id: 1, name: "Samariddin", age: 16, year: 2007 },
  { id: 2, name: "Alisher", age: 25, year: 2023 },
  { id: 3, name: "Asomiddin", age: 35, year: 2023 },
  { id: 4, name: "Abdurrahmon", age: 38, year: 2023 },
  { id: 5, name: "Abdulatif", age: 45, year: 2023 },
  { id: 6, name: "Abdulatif", age: 45, year: 2023 },
  { id: 7, name: "Abdurrahmon", age: 38, year: 2023 },
];

export const columns = [
  { key: "id", header: "ID" },
  { key: "name", header: "Name" },
  { key: "age", header: "Age" },
  { key: "year", header: "Year" },
];
