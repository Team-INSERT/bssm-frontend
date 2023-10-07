import { POST } from "@/constants";
import { PostCategoryType } from "@/types";
import { atom } from "recoil";

export const categoriesStore = atom<PostCategoryType>({
  key: "categoriesStore",
  default: POST.COMMON,
});
