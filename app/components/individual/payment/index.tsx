import React, { useEffect, useState } from "react";
import GameHero from "../GameHero";
import axios from "axios";
import { useRouter } from "next/router";
import { ProfilePict } from "../styles";
import Image from "next/image";
import Link from "next/link";
import { SubTextOutline, TextOutline } from "../../homepage/styles";
import PaymentDetail from "./PaymentDetail";

const IndividualPaymentPage = () => {
  const router = useRouter();
  const { game, namaLengkap } = router.query;

  const [content, setContent] = useState({
    namaLengkap: "",
    namaPanggilan: "",
    npm: "",
    idLine: "",
    jenisElemen: "",
    profilePicture: { data: { attributes: { url: "" } } },
  });

  const [paymentDetail, setPaymentDetail] = useState({
    gopay: "",
    Jenius: "",
    Mandiri: "",
    biayaPendaftaran: "",
  });

  const [gameImage, setGameImage] = useState({
    data: { attributes: { url: "" } },
  });

  const [detilInformasi, setDetilInformasi] = useState({
    title: "Sembunyikan Detil Informasi",
    isOpen: true,
  });

  const game_url =
    game !== undefined
      ? (game as string)
          .split(" ")
          .map(words => {
            return words[0].toUpperCase() + words.slice(1);
          })
          .join("%20")
      : game;

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/registration-details?populate=profilePicture&filters[namaLengkap][$eq]=${namaLengkap}&fields=namaLengkap,namaPanggilan,npm,idLine,jenisElemen`;
  const url_for_game = `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?populate=image,paymentDetail&filters[name][$eq]=${game_url}`;

  useEffect(() => {
    const getContent = async () => {
      try {
        const {
          data: {
            data: [{ attributes }],
          },
        } = await axios.get(url);

        const {
          data: {
            data: [
              {
                attributes: { image, paymentDetail },
              },
            ],
          },
        } = await axios.get(url_for_game);

        setContent(attributes);
        setPaymentDetail(paymentDetail.data.attributes);
        setGameImage(image);
      } catch (error) {
        return {};
      }
    };
    getContent();
  }, [game, namaLengkap, url, url_for_game]);

  const pp_url = `${process.env.NEXT_PUBLIC_BASE_URL}${content.profilePicture.data.attributes.url}`;

  return (
    <div className="max-w-[80%] mx-auto mb-[200px]">
      <TextOutline className="font-black text-3xl text-[#6A7CC8] mt-10 maxmd:hidden  md:text-5xl">
        Pendaftaran Games
        <br className="md:hidden" />
        &nbsp;Individual
      </TextOutline>
      <div className="md:flex flex-row-reverse">
        <GameHero name={game_url as string} image={gameImage} />
        <div className="w-full">
          <SubTextOutline className="text-white font-sunflower font-bold text-2xl md:text-3xl md:mt-2 md:mb-5">
            {game}
          </SubTextOutline>
          <h1 className="font-bold text-2xl mt-8">
            Terima kasih telah melakukan pendaftaran games di PERAK 2021
          </h1>
          <div className="text-md font-medium mt-5">
            <p>Silahkan melakukan pembayaran biaya pendaftaran sebesar</p>
            <p className="my-3 font-bold text-xl">
              Rp {paymentDetail.biayaPendaftaran}
            </p>
            <p>melalui nomor rekening :</p>
            <p>Mandiri {paymentDetail.Mandiri}</p>
            <p>Jenius {paymentDetail.Jenius}</p>
            <p>Gopay {paymentDetail.gopay}</p>
          </div>
          <div className="flex gap-3 items-center mt-5">
            <div className="p-2 bg-light-purple inline-block rounded-lg border-black border-2">
              <ProfilePict src={pp_url} className="w-48 h-48 bg-dark-purple" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">{content.namaLengkap}</h1>
              <p className="text-md">
                {content.namaPanggilan} - {content.jenisElemen}
              </p>
            </div>
          </div>
          <PaymentDetail {...content} detilInformasi={detilInformasi} setDetilInformasi={setDetilInformasi} />
          <div className="mt-11 p-2 bg-light-green rounded-lg border-black border-2">
            <Link href={"/"} passHref>
              <button className="w-full py-2 px-3 bg-dark-green rounded-lg border-black border-2 text-xl font-semibold text-white">
                Daftar Games Lain
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualPaymentPage;
