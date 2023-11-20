import { PostCategoryType } from "../../types";

export default interface PostCategoryBoxProps {
  handleChangeCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentCategory: PostCategoryType;
}
