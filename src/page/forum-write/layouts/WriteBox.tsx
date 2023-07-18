import Column from "@/components/Flex/Column";
import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import InputBox from "./InputBox";

const WriteBox = () => {
  return (
    <Layout>
      <Column gap="4px">
        <Title />
        <SubTitle />
      </Column>
      <InputBox />
    </Layout>
  );
};

const Layout = styled.div`
  width: 76%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h1`
  ${font.H2};

  &:after {
    content: "📕 글쓰기";
  }
`;

const SubTitle = styled.p`
  ${font.context};
  color: ${color.gray};

  &:after {
    content: "자신의 생각을 게시판에 자유롭게 남겨보세요!";
  }
`;

export default WriteBox;
