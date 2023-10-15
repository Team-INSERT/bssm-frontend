import styled, { css } from "styled-components";
import { color, flex } from "@/styles";
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
        아직 지원하지 않는 기능이에요.
        {false && (
          <>
            <ModalHeader handleClickCloseButton={onClose} />
            <ModalList />
          </>
        )}
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
  min-height: 20vh;
  height: fit-content;
  ${flex.COLUMN_CENTER};
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
