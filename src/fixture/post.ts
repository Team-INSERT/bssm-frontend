import { POST } from "@/constants";
import { IPost } from "@/interfaces";

const post: IPost = {
  id: "0",
  title: "",
  content: "",
  user: {
    id: 0,
    nickName: "",
    profileImage: "",
  },
  category: POST.COMMON,
  createdAt: "",
  commentCount: 0,
  likeCount: 0,
  doesLike: false,
};

export default post;
