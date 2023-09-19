import { POST } from "@/constants";
import { PostListType } from "@/types";

const postList: PostListType = [
  {
    id: 0,
    user: {
      id: 0,
      nickName: "",
      profileImage: "",
    },
    category: POST.COMMON,
    title: "",
    createdAt: "",
    view: 0,
    commentCount: 0,
    likeCount: 0,
    isMyLike: false,
  },
];

export default postList;
