import { POST } from "@/constants";
import { IPost } from "@/interfaces";

const post: IPost = {
  id: 0,
  user: {
    id: 0,
    nickName: "",
    profileImage: "",
  },
  category: POST.COMMON,
  content: "",
  title: "",
  createdAt: "",
  view: 0,
  commentCount: 0,
  likeCount: 0,
  isMyLike: false,
};

export default post;
