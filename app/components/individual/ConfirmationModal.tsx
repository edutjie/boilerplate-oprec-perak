import React, { useState } from "react";
import { TextOutline } from "../homepage/styles";
import { ConfirmationModalInterface } from "./interfaces/ConfirmationModal.interface";

const ConfirmationModal = ({
  onCancel,
  onConfirm,
  isClicked,
}: ConfirmationModalInterface) => {
  return (
    <div className="fixed float-left top-[50%] left-[50%] transfrom -translate-x-1/2 -translate-y-1/2 w-[80%] mx-auto max-w-2xl bg-[#E5B632] border-black border-2 rounded-md p-8 md:px-14 z-10">
      <TextOutline className="font-black text-xl md:text-3xl text-[#6A7CC8] mt-2 text-center">
        Apakah Anda Yakin Ingin Mendaftar di Permainan Ini?
      </TextOutline>
      <p className="font-bold text-sm md:text-md mt-2 text-center">
        Pastikan semua data yang telah anda masukkan tidak ada yang salah. Anda
        tidak bisa mengubah data setelah pendaftaran tersimpan.
      </p>
      <div className="md:flex gap-3 max-w-md mx-auto">
        <div className="w-full mx-auto mt-2 sm:mt-5 p-1 px-2 md:p-2 bg-[#FAA299] border-black border-2 rounded-md">
          <button
            disabled={isClicked ? true : false}
            className="disabled:opacity-50 w-full mx-auto p-1 md:p-2 bg-[#EE200C] border-black border-2 rounded-md text-md md:text-lg font-semibold text-white"
            onClick={onCancel}
          >
            Batal
          </button>
        </div>
        <div className="w-full mx-auto mt-2 sm:mt-5 p-1 px-2 md:p-2 bg-light-green border-black border-2 rounded-md">
          <button
            disabled={isClicked ? true : false}
            className="disabled:opacity-50 w-full mx-auto p-1 md:p-2 bg-dark-green border-black border-2 rounded-md text-md md:text-lg font-semibold text-white"
            onClick={onConfirm}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
