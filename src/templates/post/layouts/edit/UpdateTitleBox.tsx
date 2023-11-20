import { color, font } from "@/styles";
import React from "react";
import styled from "styled-components";

const UpdateTitleBox = () => {
  return (
    <>
      <TitleText>✍🏻 글 수정하기</TitleText>
      <SubTitleText>게시글의 어떤 내용을 수정하고 싶으신가요?</SubTitleText>
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

export default UpdateTitleBox;
