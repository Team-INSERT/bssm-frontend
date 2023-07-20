import { ModalStore } from "@/global/types/modal.type";
import { atom } from "recoil";

const modalStore = atom<ModalStore>({
  key: "modalStore",
  default: {
    title: "",
    content: null,
    visible: false,
  },
});

export default modalStore;
