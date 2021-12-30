import React from "react";
import Image from "next/image";
import { PaymentDetailInterface } from "./interfaces/PaymentDetail.interface";

const PaymentDetail = ({
  detilInformasi,
  setDetilInformasi,
  npm,
  idLine,
}: PaymentDetailInterface) => {
  return (
    <div>
      <div
        className="flex mt-11 items-center gap-4 cursor-pointer"
        onClick={() => {
          setDetilInformasi({
            title: "Perlihatkan Detil Informasi",
            isOpen: !detilInformasi.isOpen,
          });
        }}
      >
        <h1 className="font-bold text-xl">{detilInformasi.title}</h1>
        <div
          className={`-mb-2 cursor-pointer ${
            !detilInformasi.isOpen ? "transform rotate-180 -mt-3" : ""
          }`}
        >
          <Image
            src="/assets/arrow-up.svg"
            alt="arrow"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className={`mt-5 text-md ${detilInformasi.isOpen ? "" : "hidden"}`}>
        <h1 className="font-bold">NPM</h1>
        <p>{npm}</p>
        <h1 className="font-bold mt-3">ID Line / WhatsApp</h1>
        <p>{idLine}</p>
      </div>
    </div>
  );
};

export default PaymentDetail;
