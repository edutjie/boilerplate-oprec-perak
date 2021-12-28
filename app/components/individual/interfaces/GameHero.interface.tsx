export interface GameHeroInterface {
  name: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}
