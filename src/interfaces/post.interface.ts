import { PostCategoryType } from "@/types";

export default interface IPost {
  id: number;
  user: {
    code: number;
    nickname: string;
  };
  category: PostCategoryType;
  title: string;
  createdAt: string;
  view: number;
  totalComments: number;
  totalLikes: number;
}
