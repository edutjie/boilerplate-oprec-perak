import React from "react";
import Games from "./Games";
import { TextOutline } from "./styles";

const HomePage = () => {
  return (
    <div className="z-20 max-w-[85%] mx-auto">
      <TextOutline className="font-black text-3xl text-[#6A7CC8] my-14">
        Pilih games yang
        <br />
        kamu inginkan
      </TextOutline>
      <Games />
    </div>
  );
};

export default HomePage;
