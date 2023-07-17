import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import Arrow from "@/page/post/assets/CategoryArrow.svg";
import Image from "next/image";

const Category = () => {
  return (
    <Container>
      <PostType>학생 게시판</PostType>
      <Image src={Arrow} alt="arrow" width={12} height={12} />
      <CategoryType />
      <CategoryType>자유</CategoryType>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PostType = styled.h1`
  ${font.H6};
`;

const CategoryType = styled(PostType)`
  margin-left: -4px;
`;

export default Category;
