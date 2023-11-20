import React from "react";
import styled from "styled-components";
import { color, flex, font } from "@/styles";
import { Emoji } from "@/assets/icons";
import useEmoji from "@/hooks/useEmoji";
import { EmojiModal } from "@/components/common";
import { Button } from "@/components/atoms";
import { useComment } from "@/templates/post/hooks";
import { PostDetailParamsProps } from "@/templates/post/interfaces";

const CreateCommentBox = ({ id }: PostDetailParamsProps) => {
  const { commentInput, handleCommentInputChange, handleCreateCommentClick } =
    useComment(id);
  const { openEmoji, closeEmoji, visible } = useEmoji();

  return (
    <Container>
      <CommentTextArea
        onChange={handleCommentInputChange}
        value={commentInput}
      />
      <CommentToolBox>
        {visible && <EmojiModal onClose={closeEmoji} top="-24%" right="84%" />}
        <Emoji onClick={openEmoji} />
        <Button color={color.primary_blue} onClick={handleCreateCommentClick}>
          작성
        </Button>
      </CommentToolBox>
    </Container>
  );
};

const Container = styled.div`
  ${flex.COLUMN};
  width: 100%;
  gap: 8px;
`;

const CommentTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 2px solid ${color.on_tertiary};
  padding: 12px;
  ${font.p3};
`;

const CommentToolBox = styled.div`
  ${flex.VERTICAL};
  gap: 16px;
  margin-left: auto;
  position: relative;
`;

export default CreateCommentBox;
