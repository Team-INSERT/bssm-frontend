import styled, { css } from "styled-components";
import { IModalState } from "@/_interfaces";

interface ModalViewProps extends IModalState {
  onClose?: () => void;
}

const ModalView = ({ component, visible, onClose }: ModalViewProps) => {
  return (
    <Container>
      <Background hidden={!visible} onClick={onClose} />
      <ModalContainer>{component}</ModalContainer>
    </Container>
  );
};

const Container = styled.div``;

const Background = styled.div<{ hidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  width: fit-content;
  height: fit-content;
  z-index: 20;
  transform: translate(-50%, -50%);

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export default ModalView;
