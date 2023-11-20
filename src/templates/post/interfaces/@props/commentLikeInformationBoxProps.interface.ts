import Comment from "../comment.interface";

export default interface CommentLikeInformationBoxProps {
  handleRecommentWriteModeChange: () => void;
  comment: Comment;
}
