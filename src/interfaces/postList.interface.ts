import { IPost } from ".";

export default interface IPostList {
  limit: number;
  postList: Array<IPost>;
}
