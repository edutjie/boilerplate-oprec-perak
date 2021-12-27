import React from "react";
import TextOutline from "./styles/TextOutline.styled";

import Game from "./Game";
import { gamesDummy } from "./utils/gamesDummy";
import { GameInterface } from "./interfaces/Game.interface";

const Games = () => {
  return (
    <div>
      <TextOutline className="text-white font-bold text-md">
        Games Individual
      </TextOutline>
      <div className="flex flex-wrap gap-4">
        {gamesDummy.map(
          (game: { title: string; img: string; url: string }, index) => (
            <Game {...game} key={index} index={index} />
          )
        )}
      </div>
    </div>
  );
};

export default Games;
