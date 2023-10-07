import { useRecoilState } from "recoil";
import useModal from "@/hooks/useModal";
import modalStore from "@/store/modal.store";
import ModalView from "./View";

const Modal = () => {
  const [modal] = useRecoilState(modalStore);
  const { closeModal } = useModal();

  return (
    <ModalView
      {...modal}
      onClose={() => {
        modal.onClose?.();
        if (!modal.menualClose) {
          closeModal();
        }
      }}
    />
  );
};

export default Modal;
