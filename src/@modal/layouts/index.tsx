import { useAtomValue } from "jotai";
import { modalContext } from "../context";
import { useModal } from "../hooks";
import ModalView from "./ModalView";

const Modal = () => {
  const modal = useAtomValue(modalContext);
  const { closeModal } = useModal();

  const handleModalClose = () => {
    modal.onClose?.();
    if (!modal.manualClose) closeModal();
  };

  return <ModalView {...modal} onClose={handleModalClose} />;
};

export default Modal;
