import React from "react";
import styled from "styled-components";
import { XIcon } from "@/assets/icons";
import { theme, flex, font } from "@/styles";
import { useModal } from "@/@modal/hooks";
import { useUser } from "@/@user/hooks";
import { Button } from "@/components/atoms";

const SettingModal = () => {
  const { closeModal } = useModal();
  const { logout } = useUser();

  return (
    <Modal>
      <ModalContent>
        <SettingBox>
          <SettingText>설정</SettingText>
          <XIcon onClick={closeModal} />
        </SettingBox>
        <Button color={theme.primary_blue} onClick={logout}>
          로그아웃
        </Button>
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
  border-radius: 3%;
`;

const SettingBox = styled.div`
  ${flex.VERTICAL}
`;

const SettingText = styled.p`
  ${flex.CENTER};
  ${font.H4};
`;

export default SettingModal;
