import { IPost } from "@/interfaces";

const emptyPost: IPost = {
  id: 0,
  user: {
    code: 0,
    nickname: "",
  },
  category: "all",
  content: "",
  title: "",
  createdAt: "",
  view: 0,
  totalComments: 0,
  totalLikes: 0,
};

export default emptyPost;