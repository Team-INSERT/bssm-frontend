import { POST } from "@/_constants";
import { IPost } from "@/_interfaces";

const post: IPost = {
  id: "-1",
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
