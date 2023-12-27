import { atom } from "jotai";
import { PostCategoryType } from "../types";
import { CATEGORY } from "../constants";

const currentCategoryContext = atom<PostCategoryType>(CATEGORY.COMMON);

export default currentCategoryContext;
