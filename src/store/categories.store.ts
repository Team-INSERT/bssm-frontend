import forum from "@/global/constants/forum.constant";
import PostCategoryType from "@/global/types/postCategory.type";
import { atom } from "recoil";

export const categoriesStore = atom<PostCategoryType>({
  key: "categoriesStore",
  default: forum.category.all.type,
});
