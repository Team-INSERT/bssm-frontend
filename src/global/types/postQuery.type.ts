import PostCategoryType from "./postCategory.type";

export default interface IPostQuery {
  postType: string;
  category: PostCategoryType;
}
