export interface ConfirmationModalInterface {
  onCancel: () => void;
  onConfirm: (e: any) => Promise<void>;
  isClicked: boolean;
}
