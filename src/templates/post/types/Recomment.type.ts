import Comment from "./Comment.type";

export default interface Recomment extends Omit<Comment, "postId"> {
  commentId: number;
}
