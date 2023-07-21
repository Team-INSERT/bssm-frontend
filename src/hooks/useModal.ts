import { ModalStore } from "@/global/types/modal.type";
import modalStore from "@/store/modal.store";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalStore);

  const openModal = useCallback(
    (modalData: ModalStore) => {
      setModal({
        ...modalData,
        visible: true,
      });
    },
    [setModal],
  );

  const closeModal = useCallback(() => {
    setModal({
      title: "",
      content: null,
      visible: false,
    });
  }, [setModal]);

  return { openModal, closeModal, visible: !!modal.visible };
};

export default useModal;
