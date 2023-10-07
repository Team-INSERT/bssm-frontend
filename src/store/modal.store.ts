import { IModalState } from "@/interfaces";
import { atom } from "recoil";

const modalStore = atom<IModalState>({
  key: "modalStore",
  default: {
    component: null,
    visible: false,
  },
});

export default modalStore;
