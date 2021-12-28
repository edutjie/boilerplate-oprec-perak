export interface GameInterface {
  id: number;
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
}
