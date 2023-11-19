import { Column } from "@/components/Flex";
import { color, font } from "@/styles";
import { getTextDepthCount, getTextIsOverflow } from "@/templates/post/helpers";
import { CommentContentBoxProps } from "@/templates/post/interfaces";
import React from "react";
import styled from "styled-components";

const RecommentContentBox = ({
  isDetailMode,
  handleDetailModeChange,
  content,
  commentInput,
}: CommentContentBoxProps) => {
  return (
    <Column gap="4px">
      <CommentDetail>
        {isDetailMode ? content : getTextIsOverflow(content)}
      </CommentDetail>
      {getTextDepthCount(commentInput) > 4 && (
        <DetailViewButton onClick={handleDetailModeChange}>
          {isDetailMode ? "간략히" : "자세히 보기"}
        </DetailViewButton>
      )}
    </Column>
  );
};

const CommentDetail = styled.p`
  ${font.p3};
  white-space: pre-wrap;
`;

const DetailViewButton = styled.button`
  border: none;
  width: fit-content;
  color: ${color.gray};
  ${font.caption};
  border-radius: 999px;

  &:hover {
    text-decoration: underline;
  }
`;

export default RecommentContentBox;
