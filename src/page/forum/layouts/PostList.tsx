import { Column } from "@/components/Flex";
import { PostListType } from "@/types";
import PostListItem from "./PostListItem";

interface IPostListProps {
  posts: PostListType;
}

const PostList = ({ posts }: IPostListProps) => {
  return (
    <Column gap="8px">
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </Column>
  );
};

export default PostList;
