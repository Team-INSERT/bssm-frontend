import React from "react";
import { CustomEditor } from "@/components/atoms";
import { Column } from "@/components/Flex";
import styled from "styled-components";
import { font } from "@/styles";
import { PostCategoryInputBoxProps } from "../../interfaces";

const ContentInputBox = ({
  handleChange,
  postData,
}: PostCategoryInputBoxProps) => {
  return (
    <Column gap="6px">
      <TitleInputLabelText>글 내용</TitleInputLabelText>
      <CustomEditor value={postData.content} onChange={handleChange} />
    </Column>
  );
};

const TitleInputLabelText = styled.span`
  ${font.p3};
`;

export default ContentInputBox;
