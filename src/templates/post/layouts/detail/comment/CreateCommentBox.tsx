import React from "react";
import styled from "styled-components";
import { theme, flex, font } from "@/styles";
import { Button } from "@/components/atoms";
import { useComment } from "@/templates/post/hooks";
import { PostDetailParamsProps } from "@/templates/post/types/@props";

const CreateCommentBox = ({ id }: PostDetailParamsProps) => {
  const { commentInput, handleCommentInputChange, handleCreateCommentClick } =
    useComment(id);

  return (
    <Container>
      <CommentTextArea
        onChange={handleCommentInputChange}
        value={commentInput}
      />
      <CommentToolBox>
        <Button color={theme.primary_blue} onClick={handleCreateCommentClick}>
          작성
        </Button>
      </CommentToolBox>
    </Container>
  );
};

const Container = styled.div`
  ${flex.COLUMN_FLEX};
  width: 100%;
  gap: 8px;
`;

const CommentTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 2px solid ${theme.on_tertiary};
  padding: 12px;
  ${font.p3};
`;

const CommentToolBox = styled.div`
  ${flex.HORIZONTAL};
  gap: 16px;
  margin-left: auto;
  position: relative;
`;

export default CreateCommentBox;
