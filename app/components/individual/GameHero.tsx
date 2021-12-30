import React from "react";
import Image from "next/image";
import { TextOutline, SubTextOutline } from "../homepage/styles";
import { GameHeroInterface } from "./interfaces/GameHero.interface";
import { useMediaQuery } from "react-responsive";

const GameHero = ({ name, image }: GameHeroInterface) => {
  const isSmallScreen = useMediaQuery({
    maxWidth: "768px",
  });
  const isMediumScreen = useMediaQuery({
    maxWidth: "1336px",
  });

  const img_url = image.data.attributes.url;
  return (
    <div className="w-full">
      <div className="flex justify-center ">
        <div className="absolute mx-auto top-0 md:top-16 -z-[5]">
          <Image
            src="/assets/form-logo-frame.svg"
            alt="Frame"
            width={!isMediumScreen ? 500 : !isSmallScreen ? 400 : 300}
            height={!isMediumScreen ? 500 : !isSmallScreen ? 400 : 300}
          />
        </div>
        <div
          className={`${
            !isMediumScreen ? "top-28" : "top-24"
          } mt-14 md:absolute`}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${img_url}`}
            alt={name}
            width={!isMediumScreen ? 300 : !isSmallScreen ? 250 : 200}
            height={!isMediumScreen ? 300 : !isSmallScreen ? 250 : 200}
          />
        </div>
      </div>
      <TextOutline className="font-black text-3xl text-[#6A7CC8] mt-10 md:hidden">
        Pendaftaran Games
        <br className="md:hidden" />
        &nbsp;Individual
      </TextOutline>
    </div>
  );
};

export default GameHero;
