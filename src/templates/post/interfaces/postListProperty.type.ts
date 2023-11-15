import Post from "./post.interface";

type PostListOmitType = "content";
type PostListProperty = Omit<Post, PostListOmitType>;

export default PostListProperty;
