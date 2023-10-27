import React, { FC } from "react";
import Sections from "./sections";
import TooltipWrapper from "./toolwrap";




const AllSpin: FC = () => {
  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center">
        <TooltipWrapper position="top" text="Hover Top" content="Salom" />{" "}
        <TooltipWrapper position="bottom" text="Hover Bottom" content="Salom" />
        <div className="flex py-[20px] gap-[20px]">
          <TooltipWrapper position="left" text="Hover Left" content="Left" />
          <TooltipWrapper position="right" text="Hover Right" content="Right" />
        </div>
      </div>

      <Sections />
    </>
  );
};

export default AllSpin;
