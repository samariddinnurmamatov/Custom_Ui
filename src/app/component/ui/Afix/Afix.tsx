import { CustomAffixProps } from "@/app/types";
import React, { useState, useEffect } from "react";


const CustomAffix: React.FC<CustomAffixProps> = (props) => {
  const { offsetTop, offsetBottom, children } = props;
  const [affixed, setAffixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      let shouldAffix = scrollTop >= offsetTop;

      if (offsetBottom !== undefined) {
        const scrollBottom = scrollTop + window.innerHeight;
        shouldAffix = shouldAffix && scrollBottom <= offsetBottom;
      }

      setAffixed(shouldAffix);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetTop, offsetBottom]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        minHeight: "1px",
      }}
    >
      <div
        style={{
          position: affixed ? "fixed" : "static",
          top: affixed ? "0" : "auto",
          bottom: affixed ? "0" : "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomAffix;
