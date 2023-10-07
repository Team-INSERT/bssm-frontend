import IComment from "./comment.interface";

export default interface IRecomment extends Omit<IComment, "postId"> {
  commentId: number;
}
