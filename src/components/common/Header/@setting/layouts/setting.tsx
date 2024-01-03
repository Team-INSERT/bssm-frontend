import React from "react";
import styled from "styled-components";
import { XIcon } from "@/assets/icons";
import { theme, flex, font } from "@/styles";
import { useModal } from "@/@modal/hooks";

const SettingModal = () => {
  const { closeModal } = useModal();

  return (
    <Modal>
      <ModalContent>
        <SettingBox>
          <SettingText>설정</SettingText>
          <ExitButton>
            <XIcon onClick={closeModal} />
          </ExitButton>
        </SettingBox>
        <LogoutBox>로그아웃</LogoutBox>
      </ModalContent>
    </Modal>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  ${flex.CENTER};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: ${theme.white};
  padding: 1.5%;
  border-radius: 3%;
`;

const SettingBox = styled.div`
  ${flex.VERTICAL}
`;

const SettingText = styled.p`
  ${flex.CENTER};
  ${font.H4};
`;

const ExitButton = styled.div`
  margin-left: 17rem;
`;

const LogoutBox = styled.div`
  ${flex.CENTER};
  margin-top: 7%;
  padding: 2%;
  border-radius: 5%;
  background-color: ${theme.btn_background};
  color: ${theme.black};
  ${font.H4};
  cursor: pointer;

  &:hover {
    background-color: ${theme.content};
  }
`;

export default SettingModal;
