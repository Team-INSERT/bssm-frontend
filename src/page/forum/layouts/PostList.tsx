import { Column } from "@/components/Flex";
import { IPost } from "@/interfaces";
import PostListItem from "./PostListItem";

interface IPostListProps {
  posts: Array<IPost>;
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
