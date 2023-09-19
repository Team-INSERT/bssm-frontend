import { PostCategoryType } from "@/types";

export default interface IPost {
  id: number;
  user: {
    id: number;
    nickName: string;
    profileImage: string;
  };
  category: PostCategoryType;
  title: string;
  createdAt: string;
  view: number;
  likeCount: number;
  commentCount: number;
  content: string;
  isMyLike: boolean;
}
