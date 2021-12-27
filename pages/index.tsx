import Image from "next/image";
import Background from "../app/components/homepage/styles/Background.styled";
import Homepage from "../app/components/homepage";

const Home = () => {
  return (
    <>
      <div className="w-full h-full overflow-hidden">
        <Background />
        <Homepage />
        <div className="fixed top-0 -z-10 -right-60">
          <Image
            src="/assets/purple-block.svg"
            alt="Purple Block"
            width={400}
            height={400}
          />
        </div>
        <div className="fixed bottom-20 -z-10 -left-60">
          <Image
            src="/assets/yellow-block.svg"
            alt="Yellow Block"
            width={400}
            height={400}
          />
        </div>
        <div className="fixed -bottom-40 -z-10 -right-60">
          <Image
            src="/assets/red-block.svg"
            alt="Red Block"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
