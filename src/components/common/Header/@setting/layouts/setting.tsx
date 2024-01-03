import React from "react";
import styled from "styled-components";
import { XIcon } from "@/assets/icons";
import { theme, flex, font } from "@/styles";

interface SettingModalProps {
  onClose: () => void;
}

const SettingModal = ({ onClose }: SettingModalProps) => {
  return (
    <Modal>
      <ModalContent>
        <SettingBox>
          <SettingText>설정</SettingText>
          <ExitButton>
            <XIcon onClick={onClose} />
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
  background: #00000080;
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
  margin: 7% 0 0 0;
  padding: 2%;
  border-radius: 5%;
  background-color: #f1f3f5;
  color: ${theme.black};
  ${font.H4};
  cursor: pointer;

  &:hover {
    background-color: ${theme.content};
  }
`;

export default SettingModal;
