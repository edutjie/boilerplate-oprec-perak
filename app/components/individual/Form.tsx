import React from "react";
import { ProfilePict, Radio } from "./styles";
import { useMediaQuery } from "react-responsive";
import { FormInterface } from "./interfaces/Form.interface";

const Form = ({
  setModalIsOpen,
  setProfilePict,
  setProfilePictData,
  setProfilePictTitle,
  profilePict,
  profilePictTitle,
  setModifiedData,
  modifiedData,
}: FormInterface) => {
  const isSmallScreen = useMediaQuery({
    maxWidth: "768px",
  });

  // const [responseId, setReponseId] = useState("");

  const imageHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfilePict(reader.result as string);
      }
    };
    try {
      reader.readAsDataURL(e.target.files[0]);
      setProfilePictData(e.target.files[0]);

      setProfilePictTitle(e.target.files[0].name);
    } catch (err) {
      console.log(err);
    }
  };

  const chooseImageHandler = (e: any) => {
    e.preventDefault();
    if (process.browser) {
      const realImageBtn = document.getElementById("profilepict");
      realImageBtn?.click();
    }
  };

  const changeHandler = ({
    target: { name, value },
  }: {
    target: {
      name: string;
      value: string;
    };
  }) => {
    setModifiedData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      className="mt-3"
      onSubmit={
        // submitHandler
        // submitImageHandler
        e => {
          e.preventDefault();
          setModalIsOpen(true);
        }
      }
    >
      <div>
        <Radio
          required
          type="radio"
          name="jenisElemen"
          id="elemen"
          checked={modifiedData.jenisElemen === "elemen"}
          className="required form-radio w-5 h-5 -mt-2 bg-[#F54A39] border-2 border-black text-[#F54A39] checked:border-black focus:ring-0 checked:ring-0 focus:outline-0 checked:bg-radio hover:checked:border-white hover:checked:focus:border-black cursor-pointer"
          value="elemen"
          onChange={changeHandler}
        />
        <label htmlFor="elemen" className="ml-2 font-medium text-2xl">
          Elemen Staf / Dosen
        </label>
        <br />
        <Radio
          required
          type="radio"
          name="jenisElemen"
          id="mahasiswa"
          checked={modifiedData.jenisElemen === "mahasiswa"}
          className="required form-radio w-5 h-5 -mt-2 bg-[#03BF67] border-2 border-black text-[#03BF67] checked:border-black focus:ring-0 checked:ring-0 focus:outline-0 checked:bg-radio hover:checked:border-white hover:checked:focus:border-black cursor-pointer"
          value="mahasiswa"
          onChange={changeHandler}
        />
        <label htmlFor="mahasiswa" className="ml-2 font-medium text-2xl">
          Mahasiswa
        </label>
      </div>
      <div className="mt-5">
        <label htmlFor="namaLengkap" className="font-medium text-lg">
          Name Lengkap
        </label>
        <br />
        <input
          required
          type="text"
          name="namaLengkap"
          id="namaLengkap"
          placeholder="Aang Perak"
          className="required form-input rounded-sm w-full border-[3px] border-black focus:border-dark-green focus:ring-0"
          value={modifiedData.namaLengkap}
          onChange={changeHandler}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="namaPanggilan" className="font-medium text-lg">
          Name Panggilan
        </label>
        <br />
        <input
          required
          type="text"
          name="namaPanggilan"
          id="namaPanggilan"
          placeholder="Aang Aja"
          className="required form-input rounded-sm w-full border-[3px] border-black focus:border-dark-green focus:ring-0"
          value={modifiedData.namaPanggilan}
          onChange={changeHandler}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="profilepict" className="font-medium text-lg">
          Profile Picture
        </label>
        <br />
        <div className="p-2 bg-light-purple inline-block rounded-lg border-black border-2 md:hidden">
          <ProfilePict src={profilePict} className="w-48 h-48 bg-dark-purple" />
        </div>
        <input
          hidden
          required
          type="file"
          name="profilepict"
          id="profilepict"
          accept="image/*"
          onChange={imageHandler}
        />
        <div className="flex gap-3">
          <div className="w-full">
            <div className="p-2 bg-light-purple inline-block rounded-lg border-black border-2 maxmd:hidden">
              <ProfilePict
                src={profilePict}
                className="w-64 h-64 max-w-60 bg-dark-purple"
              />
            </div>
            <div className="mt-3 p-2 bg-light-yellow w-full rounded-lg border-black border-2 shadow-md">
              <button
                onClick={chooseImageHandler}
                className="w-full py-2 px-3 bg-[#CC9D1A] rounded-lg border-black border-2 text-xl font-semibold"
              >
                {isSmallScreen ? "Pilih Gambar" : "Upload File"}
              </button>
            </div>
          </div>
          <div className="w-full md:relative">
            <div className="md:absolute bottom-[90px] w-full">
              <p className="text-xl font-semibold maxmd:hidden">Pilih Gambar</p>
              <div className="bg-white rounded-sm mt-4 border-black  border-2 flex items-center w-full p-3 overflow-x-auto">
                {profilePictTitle}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="npm" className="font-medium text-lg">
          NPM
        </label>
        <br />
        <input
          required
          type="text"
          name="npm"
          id="npm"
          placeholder="1900000000"
          className="required form-input rounded-sm w-full border-[3px] border-black focus:border-dark-green focus:ring-0"
          value={modifiedData.npm}
          onChange={changeHandler}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="idLine" className="font-medium text-lg">
          ID LINE / WhatsApp
        </label>
        <br />
        <input
          required
          type="text"
          name="idLine"
          id="idLine"
          placeholder="aangperak21"
          className="required form-input rounded-sm w-full border-[3px] border-black focus:border-dark-green focus:ring-0"
          value={modifiedData.idLine}
          onChange={changeHandler}
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
