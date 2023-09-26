import POST from "./post.constant";

const FORUM = {
  COMMON: {
    NAME: "일반",
    TYPE: POST.COMMON,
  },
  NOTICE: {
    NAME: "공지",
    TYPE: POST.NOTICE,
  },
  PROJECT: {
    NAME: "프로젝트",
    TYPE: POST.PROJECT,
  },
  CODE_REVIEW: {
    NAME: "코드 리뷰",
    TYPE: POST.CODE_REVIEW,
  },
  LOST: {
    NAME: "분실했어요",
    TYPE: POST.LOST,
  },
  FOUND: {
    NAME: "습득했어요",
    TYPE: POST.FOUND,
  },
  NAME: "forum",
  TYPE: "radio",
} as const;

export default FORUM;
