import Post from "./Post.type";

type PostListOmitType = "content";
type PostListProperty = Omit<Post, PostListOmitType>;

export default PostListProperty;
