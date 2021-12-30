import Image from "next/image";
import { Background } from "../app/components/homepage/styles";
import HomePage from "../app/components/homepage";

const Home = () => {
  return (
    <>
      <div className="w-full h-full overflow-hidden">
        <Background />
        <HomePage />
        <div className="fixed top-0 -z-10 -right-60 md:-top-28 md:-right-16 md:rotate-[14deg]">
          <Image
            src="/assets/purple-block.svg"
            alt="Purple Block"
            width={400}
            height={400}
          />
        </div>
        <div className="fixed bottom-20 -z-10 maxmd:-left-60 md:bottom-60  md:right-72">
          <Image
            src="/assets/yellow-block.svg"
            alt="Yellow Block"
            width={400}
            height={400}
          />
        </div>
        <div className="fixed -bottom-44 -right-48 -z-10 md:-bottom-5 md:-right-10">
          <Image
            src="/assets/red-block.svg"
            alt="Red Block"
            width={400}
            height={400}
          />
        </div>
        <div className="fixed -z-10 -bottom-10 hidden md:block">
          <Image
            src="/assets/clouds-desktop.svg"
            alt="Red Block"
            width={1900}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
