import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { KEY, ROUTER } from "@/_constants";
import { Row } from "@/_components/Flex";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { color, flex, font } from "@/_styles";
import { categoriesStore } from "@/_store/categories.store";
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
      <ResponsiveCreateButton onClick={handleCreateButtonClick} />
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CreateButton = styled.button`
  padding: 6px 12px;
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

  @media screen and (max-width: 1025px) {
    display: none;
  }
`;

const ResponsiveCreateButton = styled(CreateButton)`
  display: none;
  @media screen and (max-width: 1025px) {
    display: flex;
    margin: 0 auto 0 0;
    padding: 6px 18px;
    background-color: ${color.primary_mint};
  }
`;

export default Forum;
