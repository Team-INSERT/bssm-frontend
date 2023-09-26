import React from "react";
import styled from "styled-components";
import { color, font } from "@/styles";
import { Emoji } from "@/assets/icons";
import useEmoji from "@/hooks/useEmoji";
import { EmojiModal } from "@/components/common";
import { useCreatePostCommentMutation } from "../../services/mutation.service";

interface ICreateCommentBoxProps {
  postId: string;
}

const CreateCommentBox = ({ postId: id }: ICreateCommentBoxProps) => {
  const [detail, setDetail] = React.useState("");
  const { openEmoji, closeEmoji, visible } = useEmoji();
  const { mutate } = useCreatePostCommentMutation();

  const handleCreateCommentClick = async () => {
    mutate({ id, detail });
    setDetail("");
  };

  return (
    <Container>
      <CommentTextArea
        onChange={(e) => setDetail(e.target.value)}
        value={detail}
      />
      <CommentToolBox>
        {visible && <EmojiModal onClose={closeEmoji} top="-24%" right="84%" />}
        <Emoji onClick={openEmoji} />
        <CommentUploadButton onClick={handleCreateCommentClick} />
      </CommentToolBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export default CreateCommentBox;
