import forum from "@/utils/constants/forum.constant";
import { atom } from "recoil";

export const categoriesStore = atom<string>({
  key: "categoriesStore",
  default: forum.category.all.type,
});
