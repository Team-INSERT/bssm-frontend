import PostCategoryType from "../PostCategory.type";

export default interface PostCategoryBoxProps {
  handleChangeCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentCategory: PostCategoryType;
}
