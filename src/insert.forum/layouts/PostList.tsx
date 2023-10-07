import { Column } from "@/_components/Flex";
import { IPostInfiniteList } from "@/_interfaces";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { PuffLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { flex } from "@/_styles";
import PostListItem from "./PostListItem";

const PostList = ({
  data: postList,
  fetchNextPage,
  hasNextPage,
}: UseInfiniteQueryResult<IPostInfiniteList>) => {
  return (
    <InfiniteScroll
      dataLength={postList?.pages.flatMap((page) => page.entity).length || 0}
      next={fetchNextPage}
      hasMore={hasNextPage || false}
      loader={
        <LoaderBox>
          <PuffLoader size={30} />
        </LoaderBox>
      }
    >
      {postList?.pages?.map((posts) => (
        <Column gap="8px" key={posts.currentPage}>
          {posts.entity.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </Column>
      ))}
    </InfiniteScroll>
  );
};

const LoaderBox = styled.div`
  width: 100%;
  ${flex.CENTER};
  margin: 10px;
`;

export default PostList;
