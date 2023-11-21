import { CATEGORY } from "../../constants";
import { Post } from "../../types";

const defaultPostData: Post = {
  id: "",
  title: "",
  category: CATEGORY.COMMON,
  content: "",
  prUrl: "",
  isFinished: false,
  lostThingImage: "",
  place: "",
  keepingPlace: "",
  startTime: "",
  endTime: "",
  field: "",
  user: {
    id: -1,
    nickName: "",
    profileImage: "",
  },
  createdAt: "",
  likeCount: 0,
  commentCount: 0,
  doesLike: false,
};

export default defaultPostData;
