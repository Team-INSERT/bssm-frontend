import { atom } from "jotai";
import { ModalState } from "../types";

const modalContext = atom<ModalState>({
  component: null,
  visible: false,
});

export default modalContext;
