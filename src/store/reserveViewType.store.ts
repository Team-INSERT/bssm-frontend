import { atom } from "recoil";

export const reserveViewTypeStore = atom<string>({
  key: "reserveViewTypeStore",
  default: "신청하기",
});
