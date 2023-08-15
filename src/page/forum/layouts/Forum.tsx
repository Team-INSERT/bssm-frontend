import React from "react";
import styled from "styled-components";
import { emptyPostList } from "@/assets/data";
import { KEY } from "@/constants";
import { useQueryClient } from "react-query";
import { PostListType } from "@/types";
import { useRecoilValue } from "recoil";
import { categoriesStore } from "@/store/categories.store";
import { forumFilterStore } from "@/store/forumType.store";
import ForumFilter from "./ForumFilter";
import Categories from "./Categories";
import PostList from "./PostList";
import { usePostListQuery } from "../services/query.service";

const Forum = () => {
  const queryClient = useQueryClient();
  const postType = useRecoilValue(forumFilterStore);
  const category = useRecoilValue(categoriesStore);
  const [posts, setPosts] = React.useState<PostListType>(emptyPostList);
  const { postList, isSuccess } = usePostListQuery({ postType, category });

  React.useEffect(() => {
    if (isSuccess && postList) return setPosts(postList);
    return setPosts([]);
  }, [postList, isSuccess]);

  React.useEffect(() => {
    queryClient.invalidateQueries({ queryKey: [KEY.POST, postType, category] });
  }, [postType, category, queryClient]);

  return (
    <Container>
      <ForumFilter />
      <Categories />
      <PostList posts={posts} />
    </Container>
  );
};

const Container = styled.main`
  width: 67%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default Forum;
