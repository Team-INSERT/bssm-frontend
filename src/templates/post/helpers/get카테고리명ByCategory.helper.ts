import { CATEGORY } from "../constants";
import { PostCategoryType } from "../types";

const get카테고리명ByCategory = (category: PostCategoryType) => {
  switch (category) {
    case CATEGORY.COMMON:
      return "게시판";
    case CATEGORY.CODE_REVIEW:
      return "코드 리뷰";
    case CATEGORY.FOUND:
      return "찾았어요";
    case CATEGORY.LOST:
      return "잃어버렸어요";
    case CATEGORY.NOTICE:
      return "공지사항";
    case CATEGORY.PROJECT:
      return "프로젝트";
    default:
      return category;
  }
};

export default get카테고리명ByCategory;
