import { PostCategoryType } from "@/types";

export default interface IPostQuery {
  postType: string;
  category: PostCategoryType;
}
