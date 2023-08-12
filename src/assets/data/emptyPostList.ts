import { IPost } from "@/interfaces";

const emptyPostList: Array<IPost> = [
  {
    id: 0,
    user: {
      code: 0,
      nickname: "",
    },
    category: "all",
    title: "",
    createdAt: "",
    view: 0,
    totalComments: 0,
    totalLikes: 0,
  },
];

export default emptyPostList;
