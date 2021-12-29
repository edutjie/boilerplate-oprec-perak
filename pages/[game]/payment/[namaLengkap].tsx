import React from "react";
import Image from "next/image";
import IndividualPaymentPage from "../../../app/components/individual/payment";

const PaymentPage = () => {
  return (
    <>
      <div className="w-full h-full overflow-auto bg-scroll ">
        <div className="bg-grain bg-center bg-no-repeat bg-cover fixed h-screen w-screen z-[-1]"></div>
        <div className="relative">
          <IndividualPaymentPage />
          <div className="absolute -top-20 -right-60 -z-10">
            <Image
              src="/assets/purple-block.svg"
              alt="Purple Block"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute bottom-16 -left-[18rem] -z-10">
            <Image
              src="/assets/yellow-block.svg"
              alt="Yellow Block"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute bottom-40 -right-60 -z-10">
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
              width={1000}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
