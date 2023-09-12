import PostListType from "@/types/postList.type";

export default interface IPostInfiniteList {
  entity: PostListType;
  totalPage: number;
  currentPage: number;
}
