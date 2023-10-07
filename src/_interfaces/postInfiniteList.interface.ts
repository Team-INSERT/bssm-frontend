import PostListType from "@/_types/postList.type";

export default interface IPostInfiniteList {
  entity: PostListType;
  totalPage: number;
  currentPage: number;
}
