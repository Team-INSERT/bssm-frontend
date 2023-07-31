import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { categoriesStore } from "@/store/categories.store";
import { forumFilterStore } from "@/store/forumType.store";
import { useQueryClient } from "react-query";
import KEY from "@/global/constants/key.constant";
import ForumFilter from "./ForumFilter";
import Categories from "./Categories";
import PostList from "./PostList";

const Forum = () => {
  const queryClient = useQueryClient();
  const postType = useRecoilValue(forumFilterStore);
  const category = useRecoilValue(categoriesStore);

  React.useEffect(() => {
    queryClient.invalidateQueries(KEY.POST);
  }, [postType, category, queryClient]);

  return (
    <Container>
      <ForumFilter />
      <Categories />
      <PostList />
    </Container>
  );
};

const Container = styled.main`
  width: 67%;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export default Forum;
