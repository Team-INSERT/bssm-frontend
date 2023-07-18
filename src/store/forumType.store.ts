import forum from "@/page/forum/constants/forum.constant";
import { atom } from "recoil";

export const forumFilterStore = atom<string>({
  key: "forumFilterStore",
  default: forum.free.type,
});
