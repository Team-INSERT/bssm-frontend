import color from "@/styles/color";
import React from "react";
import styled from "styled-components";
import { font } from "@/styles/font";
import Emoji from "@/global/assets/svgs/Emoji";
import AnonymousBox from "@/components/atoms/AnonymousBox";
import EmojiModal from "../common/Modal/EmojiModal";

const CommentBox = () => {
  const [isAnonymous, setIsAnonymous] = React.useState(false);
  const [isOpenEmojiModal, setIsOpenEmojiModal] = React.useState(false);

  const handleEmojiButtonClick = () => {
    setIsOpenEmojiModal(true);
  };

  return (
    <Container>
      <CommentCount>124</CommentCount>
      <CommentWriteBox>
        <CommentTextArea />
        <CommentToolBox>
          {isOpenEmojiModal && (
            <>
              <EmojiBox>
                <EmojiModal />
              </EmojiBox>
              <ModalBackground onClick={() => setIsOpenEmojiModal(false)} />
            </>
          )}
          <Emoji onClick={handleEmojiButtonClick} />
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

const EmojiBox = styled.div`
  position: absolute;
  top: -24%;
  right: 84%;
  z-index: 10;
`;

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

export default CommentBox;
