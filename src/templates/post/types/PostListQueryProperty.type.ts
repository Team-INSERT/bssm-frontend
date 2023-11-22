import { PostListProperty } from ".";

export default interface PostListQueryProperty {
  entity: Array<PostListProperty>;
  totalPage: number;
  currentPage: number;
}
