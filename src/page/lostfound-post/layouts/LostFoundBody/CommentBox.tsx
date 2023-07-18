import color from "@/styles/color";
import React from "react";
import styled from "styled-components";
import Emoji from "@/page/forum-post/assets/Emoji";
import { font } from "@/styles/font";
import AnonymousBox from "@/components/atoms/AnonymousBox";

const CommentBox = () => {
  const [isAnonymous, setIsAnonymous] = React.useState(false);

  return (
    <Container>
      <CommentCount>124</CommentCount>
      <CommentWriteBox>
        <CommentTextArea />
        <CommentToolBox>
          <Emoji width={20} height={20} />
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
  display: flex;
  gap: 16px;
  align-items: center;
  margin-left: auto;
`;

const CommentUploadButton = styled.button`
  width: 70px;
  height: 32px;
  background-color: ${color.primary_blue};
  color: white;
  border-radius: 3px;
  ${font.btn3};

  &:after {
    content: "작성";
  }
`;

export default CommentBox;
