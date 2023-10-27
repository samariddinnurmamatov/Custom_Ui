// import { AffixProps } from "@/app/types";
// import React, { useEffect, useState } from "react";

// const Affix: React.FC<AffixProps> = ({ top, children }) => {
//   const [isFixed, setIsFixed] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.pageYOffset >= top) {
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [top]);

//   return (
//     <div className={`affix${isFixed ? " affix-fixed" : ""}`}>{children}</div>
//   );
// };

// export default Affix;


// import React, { useState } from "react";
// import Button from "../Button/Button";

// interface CustomAffixProps {
//   offsetTop: number;
//   offsetBottom: number;
//   children: React.ReactNode;
// }

// const CustomAffix: React.FC<CustomAffixProps> = ({
//   children,
//   offsetTop,
//   offsetBottom,
// }) => {
//   const [top, setTop] = useState(offsetTop);
//   const [bottom, setBottom] = useState(offsetBottom);

//   const handleTopChange = (amount: number) => {
//     setTop(top + amount);
//   };

//   const handleBottomChange = (amount: number) => {
//     setBottom(bottom + amount);
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <div
//         style={{ position: "sticky", top: top + "px", bottom: bottom + "px" }}
//       >
//         {children}
//       </div>
//       <div>
//         <button type="button" onClick={() => handleTopChange(10)}>
//           Affix top
//         </button>
//         <button type="button" onClick={() => handleBottomChange(10)}>
//           Affix bottom
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomAffix;


// AffixButton.js
// import React, { useState } from 'react';

// const buttonStyle = {
//   margin: '8px',
// };

// const AffixButton = ({ top, bottom, setTop, setBottom }) => {
//   return (
//     <div>
//       <div style={{ position: 'fixed', top: top }}>
//         <button
//           style={buttonStyle}
//           onClick={() => setTop(top + 10)}
//         >
//           Affix top
//         </button>
//       </div>
//       <br />
//       <div style={{ position: 'fixed', bottom: bottom }}>
//         <button
//           style={buttonStyle}
//           onClick={() => setBottom(bottom + 10)}
//         >
//           Affix bottom
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AffixButton;


import React, { useState, useEffect } from "react";

interface CustomAffixProps {
  offsetTop: number;
  offsetBottom?: number;
  children: React.ReactNode;
}

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
    handleScroll(); // Check initial position

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
