import { Column } from "@/components/Flex";
import PostListItem from "./PostListItem";

const PostList = () => {
  return (
    <Column gap="8px">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
        <PostListItem key={key} />
      ))}
    </Column>
  );
};

export default PostList;
