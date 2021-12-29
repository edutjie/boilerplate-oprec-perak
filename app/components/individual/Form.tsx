import React from "react";
import { Radio } from "./styles";

const Form = () => {
  return (
    <form className="mt-3">
      <div>
        <Radio
          type="radio"
          name="role"
          id="elemen"
          className="form-radio w-5 h-5 -mt-2 bg-[#F54A39] border-2 border-black text-[#F54A39] checked:border-black focus:ring-0 checked:ring-0 focus:outline-0 checked:bg-radio hover:checked:border-white hover:checked:focus:border-black cursor-pointer"
        />
        <label htmlFor="elemen" className="ml-2 font-medium text-2xl">
          Elemen Staf / Dosen
        </label>
        <br />
        <Radio
          type="radio"
          name="role"
          id="mahasiswa"
          className="form-radio w-5 h-5 -mt-2 bg-[#03BF67] border-2 border-black text-[#03BF67] checked:border-black focus:ring-0 checked:ring-0 focus:outline-0 checked:bg-radio hover:checked:border-white hover:checked:focus:border-black cursor-pointer"
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
        <label htmlFor="npm" className="font-medium text-lg">
          NPM
        </label>
        <br />
        <input
          type="text"
          id="npm"
          placeholder="1900000000"
          className="form-input w-full max-w-lg border-[3px] border-black focus:border-dark-green focus:ring-0"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="line" className="font-medium text-lg">
          ID LINE / WhatsApp
        </label>
        <br />
        <input
          type="text"
          id="line"
          placeholder="aangperak21"
          className="form-input w-full max-w-lg border-[3px] border-black focus:border-dark-green focus:ring-0"
        />
      </div>
      <div className="mt-11 p-2 bg-light-green rounded-lg border-black border-2">
        <button className="w-full py-2 px-3 bg-dark-green rounded-lg border-black border-2 text-xl font-semibold text-white">
          Daftar Sekarang
        </button>
      </div>
    </form>
  );
};

export default Form;
