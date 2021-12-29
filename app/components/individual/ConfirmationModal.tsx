import React from "react";
import { TextOutline } from "../homepage/styles";

const ConfirmationModal = ({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: () => void;
}) => {
  return (
    <div className="fixed float-left top-[50%] left-[50%] transfrom -translate-x-1/2 -translate-y-1/2 w-[80%] mx-auto max-w-xl bg-[#E5B632] border-black border-2 rounded-md p-8 z-10">
      <TextOutline className="font-black text-3xl text-[#6A7CC8] mt-10 text-center">
        Apakah Anda Yakin Ingin Mendaftar di Permainan Ini?
      </TextOutline>
      <p className="font-bold text-md mt-2 text-center">
        Pastikan semua data yang telah anda masukkan tidak ada yang salah. Anda
        tidak bisa mengubah data setelah pendaftaran tersimpan.
      </p>
      <div className="mx-auto mt-5 p-2 bg-[#FAA299] border-black border-2 rounded-md">
        <button
          className="w-full mx-auto p-2 bg-[#EE200C] border-black border-2 rounded-md  text-xl font-semibold text-white"
          onClick={onCancel}
        >
          Batal
        </button>
      </div>
      <div className="mx-auto mt-5 p-2 bg-light-green border-black border-2 rounded-md">
        <button
          className="w-full mx-auto p-2 bg-dark-green border-black border-2 rounded-md  text-xl font-semibold text-white"
          onClick={onConfirm}
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
