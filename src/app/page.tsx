// "use client";
// import React, { useState } from "react";
// import Button from "@/app/component/Button/Button";
// import Spinner from "./component/Spinner/Spinner";
// import Select from "./component/Select/Select";
// import CustomTable from "./component/Table/Table";
// import Affix from "./component/Afix/Afix";
// import { columns, data, options } from "./types";

// const buttonVariants = [
//   "success",
//   "dangerbtn",
//   "warning",
//   "primarybtn",
//   "dark",
//   "primary",
//   "default",
//   "dashed",
//   "dangerdefault",
//   "disabled",
// ];

// type ButtonVariant =
//   | "success"
//   | "dangerbtn"
//   | "warning"
//   | "primarybtn"
//   | "dark"
//   | "dashed"
//   | "primary"
//   | "default"
//   | "dangerdefault"
//   | "disabled";

// export default function Home() {
//   const [selectedOption, setSelectedOption] = useState<string>("");
//   const [loading1, setLoading1] = useState(false);
//   const [loading2, setLoading2] = useState(false);

//   const handleButtonClick = (loadingSetter: (value: boolean) => void) => {
//     loadingSetter(true);
//     setTimeout(() => {
//       loadingSetter(false);
//     }, 2000);
//   };

//   const renderButton = (
//     text: string,
//     buttonVariant: ButtonVariant,
//     isLoading: boolean,
//     onClick: () => void
//   ) => (
//     <Button
//       type="button"
//       buttonVariant={buttonVariant}
//       className="button-style"
//       isLoading={isLoading}
//       onClick={onClick}
//     >
//       {text}
//     </Button>
//   );

//   const handleButtonClick1 = () => handleButtonClick(setLoading1);
//   const handleButtonClick2 = () => handleButtonClick(setLoading2);

//   const handleSelectChange = (value: string) => {
//     setSelectedOption(value);
//   };

//   return (
//     <main className="flex flex-col gap-[30px] max-w-[1000px] mx-auto py-[10px]">
//       <div className="flex flex-col items-center gap-5">
//         <h1 className="font-[700]">Button</h1>
//         <div className="flex items-center justify-around w-[100%]">
//           <div className="flex flex-col gap-[30px]">
//             {buttonVariants.slice(0, 5).map((variant) =>
//               renderButton(variant, variant as ButtonVariant, false, () => {})
//             )}
//           </div>

//           <div className="flex flex-col gap-[30px]">
//             {renderButton("DashedLoad", "dashed", loading1, handleButtonClick1)}
//             {renderButton(
//               "WarningLoad",
//               "warning",
//               loading2,
//               handleButtonClick2
//             )}
//           </div>

//           <div className="flex flex-col gap-[30px]">
//             {buttonVariants.slice(5).map((variant) =>
//               renderButton(variant, variant as ButtonVariant, false, () => {})
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Spinner Section */}
//       <div className="flex flex-col items-center gap-[20px] py-[100px]">
//         <h1>Spinner</h1>
//         <Spinner />
//       </div>

//       {/* Select Section */}
//       <div className="flex flex-col items-center gap-[20px] py-[100px]">
//         <h1>Select</h1>
//         <Select options={options} onChange={handleSelectChange} />
//       </div>

//       {/* Table Section */}
//       <div className="flex flex-col items-center gap-[30px] py-[50px]">
//         <h1>Table</h1>
//         <CustomTable data={data} columns={columns} />
//       </div>

//       {/* Affix Section */}
//       <div>
//         <Affix top={100}>
//           <div className="affix-content transition-all">Affixed element</div>
//         </Affix>
//         <div style={{ height: "1200px" }}></div>
//       </div>
//     </main>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { ButtonVariant, buttonVariants } from "./types";
import AllSpin from "./component/all/AllSpin";
import MyButton from "./component/all/Mybtn/MyButton";

interface CustomAffixProps {
  offsetTop?: number;
  offsetBottom?: number;
  children: React.ReactNode;
}


const CustomAffix: React.FC<CustomAffixProps> = ({
  offsetTop,
  offsetBottom,
  children,
}) => {
  const [isAffixed, setIsAffixed] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (offsetTop !== undefined && scrollY >= offsetTop) {
      setIsAffixed(true);
    } else if (offsetBottom !== undefined) {
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const bottomOffset = bodyHeight - windowHeight - scrollY;

      if (bottomOffset <= offsetBottom) {
        setIsAffixed(true);
      } else {
        setIsAffixed(false);
      }
    } else {
      setIsAffixed(false);
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    handleScroll(); // Saqlangan ekranni yopgan holda ham ishlaydi
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetTop, offsetBottom]);

  const affixStyle: React.CSSProperties = {
    position: isAffixed ? "fixed" : "static",
    top: isAffixed && offsetTop !== undefined ? offsetTop + "px" : "auto",
    bottom:
      isAffixed && offsetBottom !== undefined ? offsetBottom + "px" : "auto",
  };

  return <div style={affixStyle}>{children}</div>;
};

export default function Home() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const startLoadingAndStop = (loadingSetter: (value: boolean) => void) => {
    loadingSetter(true);
    setTimeout(() => {
      loadingSetter(false);
    }, 2000);
  };

  const handleButtonClick1 = () => startLoadingAndStop(setLoading1);
  const handleButtonClick2 = () => startLoadingAndStop(setLoading2);
  const [top, setTop] = useState<number>(10);
  const [bottom, setBottom] = useState<number>(100);


  return (
    <main className="flex flex-col gap-[30px] max-w-[1000px] mx-auto py-[10px]">
      <div className="flex flex-col gap-4">
        <CustomAffix offsetTop={top} offsetBottom={bottom}>
          <button
            type="button"
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => setTop(top + 10)}
          >
            Affix top
          </button>
        </CustomAffix>
        <CustomAffix offsetBottom={bottom}>
          <button
            type="button"
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => setBottom(bottom - 10)}
          >
            Affix bottom
          </button>
        </CustomAffix>
      </div>
      <div className="flex flex-col justify-around items-center min-h-screen">
        <h1 className="font-[700]">Button</h1>
        <div className="flex items-center justify-around w-[100%]">
          <div className="flex flex-col gap-[30px]">
            {buttonVariants.slice(0, 5).map((variant) => (
              <div key={variant}>
                <MyButton
                  text={variant}
                  variant={variant as ButtonVariant}
                  isLoading={false}
                  onClick={() => {}}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[30px]">
            <div key="DashedLoad">
              <MyButton
                text="DashedLoad"
                variant="dashed"
                isLoading={loading1}
                onClick={handleButtonClick1}
              />
            </div>
            <div key="WarningLoad">
              <MyButton
                text="WarningLoad"
                variant="warning"
                isLoading={loading2}
                onClick={handleButtonClick2}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[30px]">
            {buttonVariants.slice(5).map((variant) => (
              <div key={variant}>
                <MyButton
                  text={variant}
                  variant={variant as ButtonVariant}
                  isLoading={false}
                  onClick={() => {}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <AllSpin />
    </main>
  );
}
