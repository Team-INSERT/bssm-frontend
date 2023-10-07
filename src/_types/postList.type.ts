import { IPost } from "@/_interfaces";

type PostListType = Array<Omit<IPost, "content">>;

export default PostListType;
