import PostCategoryType from "../types/postCategory.type";

interface IForum {
  free: {
    name: string;
    type: string;
  };
  student: {
    name: string;
    type: string;
  };
  name: string;
  type: string;
  category: {
    [categoryName: string]: {
      name: string;
      type: PostCategoryType;
    };
  };
}

const forum: IForum = {
  free: {
    name: "자유",
    type: "free",
  },
  student: {
    name: "학생",
    type: "student",
  },
  name: "forum",
  type: "radio",
  category: {
    all: {
      name: "전체",
      type: "all",
    },
    complain: {
      name: "불만",
      type: "complain",
    },
    humor: {
      name: "유머",
      type: "humor",
    },
    infomation: {
      name: "정보",
      type: "information",
    },
  },
};

export default forum;
