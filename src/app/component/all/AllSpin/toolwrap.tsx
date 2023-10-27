import React, { FC } from "react";
import Tooltip from "../../ui/Tooltip/Tooltip";
import MyButton from "../Mybtn/MyButton";
import { TooltipButtonProps } from "@/app/types";

const TooltipWrapper: FC<TooltipButtonProps> = React.memo(({ position, text,content, }) => (
  <Tooltip text={text} position={position} content={content}>
    <MyButton
      text={text}
      variant="success"
      isLoading={false}
      onClick={() => {}}
    />
  </Tooltip>
));

TooltipWrapper.displayName = "TooltipButton";

export default TooltipWrapper;
