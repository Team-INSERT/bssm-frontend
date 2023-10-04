import { atom } from "recoil";

export const roomStore = atom<number>({
  key: "roomStore",
  default: 0,
});
