import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Back } from "@/assets/images";
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
          <button onClick={onClose}>
            <ExitButton src={Back} alt="Back" />
          </button>
        </SettingBox>
        <LogoutBox>로그아웃</LogoutBox>
      </ModalContent>
    </Modal>
  );
};

const Modal = styled.div`
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

const ExitButton = styled(Image)`
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
