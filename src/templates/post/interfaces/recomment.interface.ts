import Comment from "./comment.interface";

export default interface Recomment extends Omit<Comment, "postId"> {
  commentId: number;
}
