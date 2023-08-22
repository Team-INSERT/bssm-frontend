import BAMBOO from "@/constants/bamboo.constant";
import { atom } from "recoil";

export const bambooFilterStore = atom<string>({
  key: "bambooStore",
  default: BAMBOO.PENDING.TYPE,
});
