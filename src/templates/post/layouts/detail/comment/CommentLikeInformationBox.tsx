import { Row } from "@/components/Flex";
import { theme, flex, font } from "@/styles";
import { AddCommentIcon } from "@/templates/post/assets/icons";
import ReactableLikeIcon from "@/templates/post/assets/icons/ReactableLikeIcon";
import { useLike } from "@/templates/post/hooks";
import { CommentLikeInformationBoxProps } from "@/templates/post/types/@props";
import React from "react";
import styled from "styled-components";

const CommentLikeInformationBox = ({
  handleRecommentWriteModeChange,
  comment,
}: CommentLikeInformationBoxProps) => {
  const { currentLikeCount, isLike, handleUpdateCommentLikeButtonClick } =
    useLike({ ...comment });
  return (
    <Row gap="6px">
      <StyledBox onClick={() => handleUpdateCommentLikeButtonClick(comment.id)}>
        <ReactableLikeIcon isLiked={isLike} width={14} height={14} />
        <StyledText>{currentLikeCount}</StyledText>
      </StyledBox>
      <StyledBox onClick={handleRecommentWriteModeChange}>
        <AddCommentIcon />
        <StyledCommentText>답글</StyledCommentText>
      </StyledBox>
    </Row>
  );
};

const StyledBox = styled.div`
  ${flex.VERTICAL};
  gap: 4px;
  cursor: pointer;
  padding: 2px 6px;

  &:hover {
    background-color: ${theme.on_tertiary};
    border-radius: 999px;
  }
`;

const StyledText = styled.span`
  ${font.p3};
  color: ${theme.gray};
`;

const StyledCommentText = styled(StyledText)`
  @media screen and (max-width: 300px) {
    display: none;
  }
`;

export default CommentLikeInformationBox;
