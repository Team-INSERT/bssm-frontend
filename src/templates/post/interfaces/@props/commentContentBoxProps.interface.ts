export default interface CommentContentBoxProps {
  isDetailMode: boolean;
  handleDetailModeChange: () => void;
  content: string;
  commentInput: string;
}
