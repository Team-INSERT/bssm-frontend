import styled, { css } from "styled-components";
import { color } from "@/styles";
import ModalList from "./ModalList";
import ModalHeader from "./ModalHeader";

interface IEmojiModalProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  onClose: () => void;
}

const EmojiModal = (direction: IEmojiModalProps) => {
  const { onClose } = direction;

  return (
    <>
      <Container {...direction}>
        <ModalHeader handleClickCloseButton={onClose} />
        <ModalList />
      </Container>
      <ModalBackground onClick={onClose} />
    </>
  );
};

const Container = styled.div<{
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}>`
  position: absolute;
  z-index: 10;
  width: 30vw;
  border-radius: 12px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1);
  ${({ top, right, bottom, left }) => css`
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
  `}
`;

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

export default EmojiModal;
