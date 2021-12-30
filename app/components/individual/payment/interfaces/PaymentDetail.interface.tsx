export interface PaymentDetailInterface {
  detilInformasi: {
    title: string;
    isOpen: boolean;
  };
  setDetilInformasi: React.Dispatch<
    React.SetStateAction<{
      title: string;
      isOpen: boolean;
    }>
  >;
  npm: string;
  idLine: string;
}
