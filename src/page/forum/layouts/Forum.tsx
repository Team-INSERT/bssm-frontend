import React from "react";
import styled from "styled-components";
import { KEY } from "@/constants";
import { useQueryClient } from "react-query";
import { PostListType } from "@/types";
import { useRecoilValue } from "recoil";
import { font } from "@/styles";
import { categoriesStore } from "@/store/categories.store";
import { forumFilterStore } from "@/store/forumFilter.store";
import { postList as emptyPostList } from "@/fixture";
import Categories from "./Categories";
import PostList from "./PostList";
import { usePostListQuery } from "../services/query.service";

const Forum = () => {
  const queryClient = useQueryClient();
  const postType = useRecoilValue(forumFilterStore);
  const category = useRecoilValue(categoriesStore);
  const [posts, setPosts] = React.useState<PostListType>(emptyPostList);
  const { postList, loading, error } = usePostListQuery(category);

  React.useEffect(() => {
    if (!loading && postList) return setPosts(postList.readByCategory);
    return setPosts([]);
  }, [postList, loading, error]);

  React.useEffect(() => {
    queryClient.invalidateQueries({ queryKey: [KEY.POST, postType, category] });
  }, [postType, category, queryClient]);

  return (
    <Container>
      <Title />
      <Categories />
      <PostList posts={posts} />
    </Container>
  );
};

const Title = styled.span`
  ${font.H2};

  &:after {
    content: "📒 학생 게시판";
  }
`;

const Container = styled.main`
  width: 67%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default Forum;
