export interface GameApiInterface {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
