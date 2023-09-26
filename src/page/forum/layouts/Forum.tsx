import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { KEY, ROUTER } from "@/constants";
import { Row } from "@/components/Flex";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { color, flex, font } from "@/styles";
import { categoriesStore } from "@/store/categories.store";
import Categories from "./Categories";
import PostList from "./PostList";
import { usePostListQuery } from "../services/query.service";

const Forum = () => {
  const queryClient = useQueryClient();
  const category = useRecoilValue(categoriesStore);
  const postListQuery = usePostListQuery({ category });
  const router = useRouter();

  const handleCreateButtonClick = () => {
    router.push(ROUTER.POST.WRITE);
  };

  React.useEffect(() => {
    queryClient.invalidateQueries([KEY.POST, category]);
  }, [category, queryClient]);

  return (
    <Container>
      <Title />
      <Row>
        <Categories />
        <CreateButton onClick={handleCreateButtonClick} />
      </Row>
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

const CreateButton = styled.button`
  padding: 2px 12px;
  border-radius: 4px;
  border: none;
  background-color: ${color.primary_blue};
  color: ${color.white};
  ${font.caption};
  ${flex.CENTER};
  margin-left: auto;

  &:after {
    content: "글쓰기";
  }
`;

export default Forum;
