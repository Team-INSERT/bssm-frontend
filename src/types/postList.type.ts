import { IPost } from "@/interfaces";

type PostListType = Array<Omit<IPost, "content">>;

export default PostListType;
