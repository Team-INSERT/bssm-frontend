import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import Arrow from "@/page/post/assets/CategoryArrow";

const Category = () => {
  return (
    <Container>
      <PostType>학생</PostType>
      <Arrow width={12} height={12} />
      <CategoryType />
      <CategoryType>자유</CategoryType>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PostType = styled.h1`
  ${font.p3};
  font-weight: 600;

  &:after {
    content: " 게시판";
  }
`;

const CategoryType = styled.h1`
  ${font.p3};
  font-weight: 600;
  margin-left: -2px;
`;

export default Category;
