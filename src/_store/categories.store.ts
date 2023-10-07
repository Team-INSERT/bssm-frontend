import { POST } from "@/_constants";
import { PostCategoryType } from "@/_types";
import { atom } from "recoil";

export const categoriesStore = atom<PostCategoryType>({
  key: "categoriesStore",
  default: POST.COMMON,
});
