import { AffixProps } from "@/app/types";
import React, { useEffect, useState } from "react";

const Affix: React.FC<AffixProps> = ({ top, children }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= top) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [top]);

  return (
    <div className={`affix${isFixed ? " affix-fixed" : ""}`}>{children}</div>
  );
};

export default Affix;
