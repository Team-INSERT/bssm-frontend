export default interface ModalState {
  component: React.ReactNode;
  visible?: boolean;
  manualClose?: boolean;
  onClose?: () => void;
}
