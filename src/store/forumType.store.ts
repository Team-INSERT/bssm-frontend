import { FORUM } from "@/constants";
import { atom } from "recoil";

export const forumFilterStore = atom<string>({
  key: "forumFilterStore",
  default: FORUM.FREE.TYPE,
});
