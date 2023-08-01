const FORUM = {
  FREE: {
    NAME: "자유",
    TYPE: "free",
  },
  STUDENT: {
    NAME: "학생",
    TYPE: "student",
  },
  NAME: "forum",
  TYPE: "radio",
  CATEGORY: {
    ALL: {
      NAME: "전체",
      TYPE: "all",
    },
    COMPLAIN: {
      NAME: "불만",
      TYPE: "complain",
    },
    HUMOR: {
      NAME: "유머",
      TYPE: "humor",
    },
    INFORMATION: {
      NAME: "정보",
      TYPE: "information",
    },
  },
} as const;

export default FORUM;
