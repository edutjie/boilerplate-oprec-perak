import React, { useEffect, useState } from "react";
import { SubTextOutline } from "./styles";
import axios from "axios";
import Game from "./Game";
import { GameApiInterface } from "./interfaces/GameApi.interface";

const Games = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState([]);

  const getGames = async () => {
    try {
      setIsLoading(true);
      const { data }: { data: { data: [] } } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?populate=image`
      );

      setIsLoading(false);
      setGames(data.data);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div>
      <SubTextOutline className="text-white font-sunflower font-bold text-md md:text-3xl">
        Games Individual
      </SubTextOutline>
      <div className="flex flex-wrap gap-4 mt-3">
        {games.map((game: GameApiInterface) => (
          <Game {...game.attributes} key={game.id} id={game.id} />
        ))}
      </div>
    </div>
  );
};

export default Games;
