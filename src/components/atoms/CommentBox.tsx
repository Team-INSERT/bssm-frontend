import React from "react";
import styled from "styled-components";
import { color, font } from "@/styles";
import { Emoji } from "@/assets/icons";
import useEmoji from "@/hooks/useEmoji";
import { AnonymousBox } from "@/components/atoms";
import { EmojiModal } from "@/components/common";

const CommentBox = () => {
  const [isAnonymous, setIsAnonymous] = React.useState(false);
  const { openEmoji, closeEmoji, visible } = useEmoji();

  return (
    <Container>
      <CommentCount>124</CommentCount>
      <CommentWriteBox>
        <CommentTextArea />
        <CommentToolBox>
          {visible && (
            <EmojiModal onClose={closeEmoji} top="-24%" right="84%" />
          )}
          <Emoji onClick={openEmoji} />
          <AnonymousBox clicked={isAnonymous} setClicked={setIsAnonymous} />
          <CommentUploadButton />
        </CommentToolBox>
      </CommentWriteBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1.5px solid ${color.on_tertiary};
  padding: 12px 0;
  gap: 8px;
`;

const CommentCount = styled.h1`
  ${font.H5};

  &:before {
    content: "댓글 ";
  }

  &:after {
    content: "개";
  }
`;

const CommentWriteBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CommentTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 2px solid ${color.on_tertiary};
  padding: 12px;
  ${font.p3};
`;

const CommentToolBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-left: auto;
  position: relative;
`;

const CommentUploadButton = styled.button`
  width: 60px;
  height: 26px;
  background-color: ${color.primary_blue};
  color: white;
  border-radius: 3px;
  ${font.btn3};

  &:after {
    content: "작성";
  }
`;

export default CommentBox;
