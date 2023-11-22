import React from "react";
import { useAtom } from "jotai";
import { ModalState } from "../types";
import { modalContext } from "../context";

const useModal = () => {
  const [modal, setModal] = useAtom(modalContext);

  const openModal = React.useCallback(
    ({ component }: ModalState) => {
      setModal({ component, visible: true });
    },
    [setModal],
  );

  const closeModal = React.useCallback(() => {
    setModal({ component: null, visible: false });
  }, [setModal]);

  return { openModal, closeModal, visible: !!modal.visible };
};

export default useModal;
