import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import GameHero from "./GameHero";
import Form from "./Form";
import ConfirmationModal from "./ConfirmationModal";
import { ModalBackdrop } from "./styles";
import { SubTextOutline, TextOutline } from "../homepage/styles";

const Individual = () => {
  const router = useRouter();
  const { game } = router.query;
  const [content, setContent] = useState({
    name: "",
    image: { data: { attributes: { url: "" } } },
    paymentDetail: { data: { attributes: { biayaPendaftaran: "" } } },
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmIsClicked, setConfirmIsClicked] = useState(false);

  const [profilePict, setProfilePict] = useState(
    "/assets/purple-rectangle.svg"
  );
  const [profilePictData, setProfilePictData] = useState("");
  const [profilePictTitle, setProfilePictTitle] = useState("Aang Foto.jpg");

  const [modifiedData, setModifiedData] = useState({
    namaLengkap: "",
    namaPanggilan: "",
    npm: "",
    idLine: "",
    jenisElemen: "",
    game: [0],
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

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?populate=image,paymentDetail&filters[name][$eq]=${game_url}`;

  useEffect(() => {
    const getContent = async () => {
      try {
        const {
          data: {
            data: [{ id, attributes }],
          },
        } = await axios.get(url);
        setModifiedData(prev => ({
          ...prev,
          game: [id],
        }));
        setContent(attributes);
      } catch (err) {
        return {};
      }
    };
    getContent();
  }, [game, url]);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setConfirmIsClicked(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/registration-details`,
        { data: modifiedData }
      );
      submitImageHandler(response.data.data.id);
      setTimeout(() => {
        router.push(`/${game}/payment/${modifiedData.namaLengkap}`);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const submitImageHandler = (responseId: number) => {
    console.log(responseId);
    const formData = new FormData();
    formData.append("files", profilePictData);
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/upload/`, formData)
      .then(response => {
        const imageId = response.data[0].id;
        axios.put(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/registration-details/${responseId}`,
          { data: { profilePicture: imageId } }
        );
      });
  };

  const FormHooks = {
    setProfilePict,
    setProfilePictData,
    setProfilePictTitle,
    profilePict,
    profilePictTitle,
    setModifiedData,
    modifiedData,
  };

  const payment_fee = content.paymentDetail.data.attributes.biayaPendaftaran;

  return (
    <div className="max-w-[80%] mx-auto mb-[200px]">
      <TextOutline className="font-black text-3xl text-[#6A7CC8] mt-10 maxmd:hidden  md:text-5xl">
        Pendaftaran Games
        <br className="md:hidden" />
        &nbsp;Individual
      </TextOutline>
      <div className="md:flex flex-row-reverse">
        <GameHero {...content} />
        <div className="w-full">
          <SubTextOutline className="text-white font-sunflower font-bold text-2xl md:text-3xl md:mt-2 md:mb-5">
            {content.name}
          </SubTextOutline>
          <h1 className="font-bold text-2xl mt-2">
            Biaya pendaftaran : Rp
            {payment_fee}
          </h1>
          <p className="text-md font-medium">
            Instruksi pembayaran diberikan setelah mengisi form pendaftaran
          </p>
          <Form setModalIsOpen={setModalIsOpen} {...FormHooks} />
        </div>
      </div>
      {modalIsOpen && (
        <ConfirmationModal
          onCancel={() => {
            setModalIsOpen(false);
          }}
          onConfirm={submitHandler}
          isClicked={confirmIsClicked}
        />
      )}
      {modalIsOpen && (
        <ModalBackdrop
          onClick={() => {
            setModalIsOpen(false || confirmIsClicked);
          }}
        />
      )}
    </div>
  );
};

export default Individual;
