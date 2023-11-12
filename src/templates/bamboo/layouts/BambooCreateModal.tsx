import { Button } from "@/components/atoms";
import useModal from "@/hooks/useModal";
import { color, flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { useBamboo } from "../hooks";
import { ModalCloseIcon } from "../assets/icons";

const BambooCreateModal = () => {
  const { closeModal } = useModal();
  const [content, setContent] = React.useState("");
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const { handleCreateButtonClick } = useBamboo();

  React.useEffect(() => {
    if (textareaRef.current) textareaRef.current.focus();
  }, []);

  return (
    <Container>
      <BambooModalHeader>
        <TitleText>🎋 대나무숲 제보하기</TitleText>
        <ModalCloseIcon onClick={closeModal} />
      </BambooModalHeader>
      <BambooTextArea
        ref={textareaRef}
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <BambooButtonBox>
        <Button
          onClick={() => handleCreateButtonClick(content)}
          color={color.primary_blue}
        >
          제보하기
        </Button>
      </BambooButtonBox>
    </Container>
  );
};

const Container = styled.div`
  width: 40vw;
  height: 50vh;
  overflow-y: scroll;
  background-color: ${color.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  ${flex.COLUMN};
`;

const BambooModalHeader = styled.header`
  width: 100%;
  padding: 10px 18px;
  ${flex.HORIZONTAL};
  justify-content: space-between;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
`;

const TitleText = styled.div`
  ${font.p2};
  font-weight: 500;
`;

const BambooTextArea = styled.textarea`
  resize: none;
  border: 1px solid ${color.on_tertiary};
  border-radius: 4px;
  height: 100%;
  margin: 16px 16px 0 16px;
  padding: 16px;
  ${font.code}
`;

const BambooButtonBox = styled.div`
  width: fit-content;
  margin: 16px 16px 16px auto;
`;

export default BambooCreateModal;
