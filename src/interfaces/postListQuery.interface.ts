import { PostCategoryType } from "@/types";

export default interface IPostListQuery {
  postType: string;
  category: PostCategoryType;
}
