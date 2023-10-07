import { PostCategoryType } from "@/_types";

const POSTNAME = {
  COMMON: "일반",
  CODE_REVIEW: "코드 리뷰",
  LOST: "분실했어요",
  FOUND: "습득했어요",
  NOTICE: "공지사항",
  PROJECT: "팀원 모집",
};

const getCategory = (category: PostCategoryType) => {
  return POSTNAME[category];
};

export default getCategory;
