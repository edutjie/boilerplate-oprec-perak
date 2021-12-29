import React, { Attributes, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import GameHero from "./GameHero";
import Form from "./Form";
import ConfirmationModal from "./ConfirmationModal";
import { ModalBackdrop } from "./styles";

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
      <Form />
      <ConfirmationModal />
      <ModalBackdrop />
    </div>
  );
};

export default Individualpage;
