import { color, font } from "@/styles";
import React from "react";
import styled from "styled-components";

const WriteTitleBox = () => {
  return (
    <>
      <TitleText>📕 글 쓰기</TitleText>
      <SubTitleText>어떤 생각을 하고 계신가요?</SubTitleText>
    </>
  );
};

const TitleText = styled.h1`
  ${font.H2};
`;

const SubTitleText = styled.p`
  ${font.context};
  color: ${color.gray};
`;

export default WriteTitleBox;
