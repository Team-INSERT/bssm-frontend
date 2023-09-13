import { IPost } from "@/interfaces";

const post: IPost = {
  id: 0,
  user: {
    id: 0,
    nickName: "",
    profileImage: "",
  },
  category: "COMMON",
  content: "",
  title: "",
  createdAt: "",
  view: 0,
  commentCount: 0,
  likeCount: 0,
};

export default post;
