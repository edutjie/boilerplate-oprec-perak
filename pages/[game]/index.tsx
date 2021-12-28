import React from "react";
import { Background } from "../../app/components/homepage/styles";
import Image from "next/image";
import Individualpage from "../../app/components/individual";

const Gamepage = () => {
  return (
    <>
      <div className="relative w-full h-full overflow-auto bg-scroll">
        <Background />
        <div className="">
          <Individualpage />
          <div className="absolute -top-20 -right-60 -z-10">
            <Image
              src="/assets/purple-block.svg"
              alt="Purple Block"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute top-[245px] -left-60 -z-10">
            <Image
              src="/assets/yellow-block.svg"
              alt="Yellow Block"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute -bottom-24 -right-48 -z-10">
            <Image
              src="/assets/red-block.svg"
              alt="Red Block"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute -bottom-300 -z-10 w-full">
            <Image
              src="/assets/clouds-mobile.svg"
              alt="Red Block"
              width={1200}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gamepage;
