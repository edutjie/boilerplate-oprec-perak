export interface FormInterface {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProfilePict: React.Dispatch<React.SetStateAction<string>>;
  setProfilePictData: React.Dispatch<React.SetStateAction<string>>;
  setProfilePictTitle: React.Dispatch<React.SetStateAction<string>>;
  profilePict: string;
  profilePictTitle: string;
  setModifiedData: React.Dispatch<
    React.SetStateAction<{
      namaLengkap: string;
      namaPanggilan: string;
      npm: string;
      idLine: string;
      jenisElemen: string;
      game: number[];
    }>
  >;
  modifiedData: {
    namaLengkap: string;
    namaPanggilan: string;
    npm: string;
    idLine: string;
    jenisElemen: string;
    game: number[];
  };
}
