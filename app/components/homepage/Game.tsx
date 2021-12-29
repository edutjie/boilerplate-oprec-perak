import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GameInterface } from "./interfaces/Game.interface";

const Game = ({ id, name, image }: GameInterface) => {
  return (
    <Link href={`/${name.toLowerCase()}`} passHref>
      <div
        className={`${
          (id - 1) % 3 ? "bg-light-purple" : "bg-[#03BF67]"
        } min-w-[150px] min-h-[115px] flex justify-center items-center border-[1px] border-black rounded-sm cursor-pointer transform transition-transform hover:scale-[1.05]`}
      >
        <div
          className={`${
            (id - 1) % 3 ? "bg-dark-purple" : "bg-dark-green"
          }  min-w-[135px] min-h-[100px] flex justify-center rounded-sm`}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${image.data.attributes.url}`}
            alt={name}
            width={90}
            height={90}
          />
        </div>
      </div>
    </Link>
  );
};

export default Game;
