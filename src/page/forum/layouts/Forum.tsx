import React from "react";
import styled from "styled-components";
import { KEY } from "@/constants";
import { useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { font } from "@/styles";
import { categoriesStore } from "@/store/categories.store";
import Categories from "./Categories";
import PostList from "./PostList";
import { usePostListQuery } from "../services/query.service";

const Forum = () => {
  const queryClient = useQueryClient();
  const category = useRecoilValue(categoriesStore);
  const postListQuery = usePostListQuery({ category });

  React.useEffect(() => {
    queryClient.invalidateQueries([KEY.POST, category]);
  }, [category, queryClient]);

  return (
    <Container>
      <Title />
      <Categories />
      <PostList {...postListQuery} />
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
