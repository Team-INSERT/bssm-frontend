import { FORUM } from "@/_constants";
import { atom } from "recoil";

export const forumFilterStore = atom<string>({
  key: "forumFilterStore",
  default: FORUM.COMMON.TYPE,
});
