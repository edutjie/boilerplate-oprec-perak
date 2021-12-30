import React from "react";
import Image from "next/image";
import IndividualPaymentPage from "../../../app/components/individual/payment";
import { useMediaQuery } from "react-responsive";

const PaymentPage = () => {
  const isSmallScreen = useMediaQuery({
    maxWidth: "768px",
  });
  return (
    <>
      <div className="w-full h-full overflow-auto bg-scroll ">
        <div className="bg-grain bg-center bg-no-repeat bg-cover fixed h-screen w-screen z-[-1]"></div>
        <div className="relative">
          <IndividualPaymentPage />
          <div className="absolute -top-20 -right-60 -z-10 md:-top-28 md:-right-16 md:rotate-[14deg]">
            <Image
              src="/assets/purple-block.svg"
              alt="Purple Block"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute bottom-16 maxmd:-left-[18rem] md:bottom-60  md:right-72 -z-10">
            <Image
              src="/assets/yellow-block.svg"
              alt="Yellow Block"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute bottom-40 -right-60 -z-10 md:-bottom-5 md:-right-10">
            <Image
              src="/assets/red-block.svg"
              alt="Red Block"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute -z-10 -bottom-32 sm:-bottom-40">
            <Image
              src={`/assets/${
                isSmallScreen ? "clouds-mobile.svg" : "clouds-desktop-confirmation.svg"
              }`}
              alt="Red Block"
              width={1900}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
