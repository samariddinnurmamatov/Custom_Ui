import React, { FC, ReactNode } from "react";
import Spinner from "../Spinner/Spinner";

const LoadingButtonContent: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex items-center">
    <Spinner variant="dark" width="20px" height="20px" />
    <span className="ml-1">{children}</span>
  </div>
);

export default LoadingButtonContent;
