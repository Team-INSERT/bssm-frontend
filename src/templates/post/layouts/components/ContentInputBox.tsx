import styled from "styled-components";
import { Column } from "@/components/Flex";
import { font } from "@/styles";
import { ContentEditor } from "@/components/common";
import { PostCategoryInputBoxProps } from "../../types/@props";

const ContentInputBox = ({
  handleChange,
  postData,
}: PostCategoryInputBoxProps) => {
  return (
    <Column gap="6px">
      <TitleInputLabelText>글 내용</TitleInputLabelText>
      <ContentEditor value={postData.content} onChange={handleChange} />
    </Column>
  );
};

const TitleInputLabelText = styled.span`
  ${font.p3};
`;

export default ContentInputBox;
