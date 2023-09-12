import { PostCategoryType } from "@/types";

const POSTNAME = {
  COMMON: "일반",
  CODE_REVIEW: "코드 리뷰",
  LOST_FOUND: "분실물 찾기",
  NOTICE: "공지사항",
  PROJECT: "팀원 모집",
};

const getCategory = (category: PostCategoryType) => {
  return POSTNAME[category];
};

export default getCategory;
