import { POST } from "@/_constants";
import { PostListType } from "@/_types";

const postList: PostListType = [
  {
    id: "0",
    user: {
      id: 0,
      nickName: "",
      profileImage: "",
    },
    category: POST.COMMON,
    title: "",
    createdAt: "",
    commentCount: 0,
    likeCount: 0,
    doesLike: false,
  },
];

export default postList;
