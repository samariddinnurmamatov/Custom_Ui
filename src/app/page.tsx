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

  useEffect(() => {
    handleScroll();
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
