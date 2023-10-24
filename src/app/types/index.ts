import { HTMLProps } from "react";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit";
  buttonVariant?:
    | "default"
    | "primary"
    | "dangerdefault"
    | "disabled"
    | "loading";
}


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
}



export const options = [
  { value: "option1", label: "Mercedes-Benz" },
  { value: "option2", label: "Bmw" },
  { value: "option3", label: "Jentra" },
];

export const data = [
  { id: 1, name: "John", age: 30, year: 1992 },
  { id: 2, name: "Jane", age: 25, year: 1993 },
  { id: 3, name: "Bob", age: 35, year: 1995 },
];

export const columns = [
  { key: "id", header: "ID" },
  { key: "name", header: "Name" },
  { key: "age", header: "Age" },
  { key: "year", header: "Year" },
];
