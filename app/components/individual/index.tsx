import React, { Attributes, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { SubTextOutline, TextOutline } from "../homepage/styles";
import GameHero from "./GameHero";

const Individualpage = () => {
  const router = useRouter();
  const { game } = router.query;
  const [content, setContent] = useState({
    name: "",
    image: { data: { attributes: { url: "" } } },
    paymentDetail: { data: { attributes: { biayaPendaftaran: "" } } },
  });
  const [payment, setPayment] = useState();

  const game_url =
    game !== undefined
      ? (game as string)
          .split(" ")
          .map(words => {
            return words[0].toUpperCase() + words.slice(1);
          })
          .join("%20")
      : game;

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?populate=image,paymentDetail&filters[name][$eq]=${game_url}`;

  useEffect(() => {
    const getContent = async () => {
      try {
        const {
          data: {
            data: [{ attributes }],
          },
        } = await axios.get(url);
        setContent(attributes);
        console.log(attributes);
      } catch (error) {
        return {};
      }
    };
    getContent();
  }, [game, url]);

  const payment_fee = content.paymentDetail.data.attributes.biayaPendaftaran;

  return (
    <div className="max-w-[80%] mx-auto">
      <GameHero {...content} />
      <h1 className="font-bold text-2xl mt-2">
        Biaya pendaftaran : Rp
        {payment_fee}
      </h1>
      <p className="text-md font-medium">
        Instruksi pembayaran diberikan setelah mengisi form pendaftaran
      </p>
      <form className="mt-3">
        <div>
          <input
            type="radio"
            name="role"
            id="elemen"
            className="form-radio w-5 h-5 -mt-2 bg-[#F54A39] border-2 border-black text-[#F54A39] checked:border-black focus:ring-0 checked:ring-0 focus:outline-0 checked:bg-radio hover:checked:border-white hover:checked:focus:border-black"
          />
          <label htmlFor="elemen" className="ml-2 font-medium text-2xl">
            Elemen Staf / Dosen
          </label>
          <br />
          <input
            type="radio"
            name="role"
            id="mahasiswa"
            className="form-radio w-5 h-5 -mt-2 bg-[#03BF67] border-2 border-black text-[#03BF67] checked:border-black focus:ring-0 checked:ring-0 focus:outline-0 checked:bg-radio hover:checked:border-white hover:checked:focus:border-black"
          />
          <label htmlFor="mahasiswa" className="ml-2 font-medium text-2xl">
            Mahasiswa
          </label>
        </div>
        <div className="mt-5">
          <label htmlFor="lengkap" className="font-medium text-lg">
            Name Lengkap
          </label>
          <br />
          <input
            type="text"
            id="lengkap"
            placeholder="Aang Perak"
            className="form-input w-full max-w-lg border-[3px] border-black focus:border-dark-green focus:ring-0"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="panggilan" className="font-medium text-lg">
            Name Panggilan
          </label>
          <br />
          <input
            type="text"
            id="panggilan"
            placeholder="Aang Aja"
            className="form-input w-full max-w-lg border-[3px] border-black focus:border-dark-green focus:ring-0"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="panggilan" className="font-medium text-lg">
            Name Panggilan
          </label>
          <br />
          <input
            type="text"
            id="panggilan"
            placeholder="Aang Aja"
            className="form-input w-full max-w-lg border-[3px] border-black focus:border-dark-green focus:ring-0"
          />
        </div>
      </form>
    </div>
  );
};

export default Individualpage;
