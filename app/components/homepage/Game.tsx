import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GameInterface } from "./interfaces/Game.interface";

const Game = ({ title, img, url, index }: GameInterface) => {
  return (
    <Link href={url} passHref>
      <div
        className={`${
          index % 4 ? "bg-light-purple" : "bg-[#03BF67]"
        } min-w-[150px] min-h-[115px] flex justify-center items-center border-[1px] border-black rounded-sm`}
      >
        <div
          className={`${
            index % 4 ? "bg-dark-purple" : "bg-dark-green"
          }  min-w-[135px] min-h-[100px] flex justify-center rounded-sm`}
        >
          <Image src={img} alt={title} width={90} height={90} />
        </div>
      </div>
    </Link>
  );
};

export default Game;
