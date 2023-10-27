import { TooltipProps } from "@/app/types";
import React from "react";
import { styleClasses } from "./tooltipStyles";

const Tooltip: React.FC<TooltipProps> = (props) => {
  const { position, content, children } = props;

  const positionClass = styleClasses[position] || "";
  const tooltipClass = `${styleClasses.base} ${positionClass}`;

  return (
    <div id="tooltip" className="relative cursor-pointer group">
      <div className="mx-2 my-1">{children}</div>
      <span className={tooltipClass}>{content}</span>
    </div>
  );
};

export default Tooltip;
