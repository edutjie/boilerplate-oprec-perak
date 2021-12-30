import React from "react";
import { Background } from "../../app/components/homepage/styles";
import Image from "next/image";
import Individual from "../../app/components/individual";
import { useMediaQuery } from "react-responsive";

const GamePage = () => {
  const isSmallScreen = useMediaQuery({
    maxWidth: "768px",
  });
  return (
    <>
      <div className="w-full h-full overflow-x-hidden">
        <Background />
        <div className="relative">
          <Individual />
          <div className="absolute -top-20 -right-60 -z-10 h-full md:-top-56 md:-right-3 md:rotate-[14deg]">
            <Image
              src="/assets/purple-block.svg"
              alt="Purple Block"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute maxmd:-left-60 md:bottom-[25rem]  md:right-72 -z-10 ">
            <Image
              src="/assets/yellow-block.svg"
              alt="Yellow Block"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute bottom-40 -right-[17rem] -z-10 md:-bottom-44 md:right-28">
            <Image
              src="/assets/red-block.svg"
              alt="Red Block"
              width={500}
              height={500}
            />
          </div>
          <div className="absolute -z-10 -bottom-32 sm:-bottom-40">
            <Image
              src={`/assets/${
                isSmallScreen ? "clouds-mobile.svg" : "clouds-desktop-individual.svg"
              }`}
              alt="Red Block"
              width={1900}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
