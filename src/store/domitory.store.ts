import DOMITORY from "@/constants/domitory.constant";
import { atom } from "recoil";

export const domitoryFilterStore = atom<string>({
  key: "domitoryFilterStore",
  default: DOMITORY.NOT_JOINED.TYPE,
});
