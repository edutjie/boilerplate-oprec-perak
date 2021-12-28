import React from "react";
import Image from "next/image";
import { TextOutline, SubTextOutline } from "../homepage/styles";
import { GameHeroInterface } from "./interfaces/GameHero.interface";

const GameHero = ({ name, image }: GameHeroInterface) => {
  const img_url = image.data.attributes.url;
  return (
    <div>
      <div className="flex justify-center">
        <div className="absolute w-[300px] mx-auto top-0 -z-[5]">
          <Image
            src="/assets/form-logo-frame.svg"
            alt="Frame"
            width={300}
            height={300}
          />
        </div>
        <div className="mt-14">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${img_url}`}
            alt={name}
            width={200}
            height={200}
          />
        </div>
      </div>
      <TextOutline className="font-black text-3xl text-[#6A7CC8] mt-10">
        Pendaftaran Games
        <br />
        Individual
      </TextOutline>
      <SubTextOutline className="text-white font-sunflower font-bold text-2xl">
        {name}
      </SubTextOutline>
    </div>
  );
};

export default GameHero;
