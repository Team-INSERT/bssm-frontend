import Comment from "../Comment.type";

export default interface CommentLikeInformationBoxProps {
  handleRecommentWriteModeChange: () => void;
  comment: Comment;
}
