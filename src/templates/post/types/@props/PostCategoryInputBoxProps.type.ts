import Post from "../Post.type";

export default interface PostCategoryInputBoxProps {
  handleChange: (
    eventOrContent?: string | React.ChangeEvent<HTMLInputElement>,
  ) => void;
  postData: Post;
  lostImageUrl?: undefined;
  handleFileSelect?: (file?: File) => Promise<void>;
}
