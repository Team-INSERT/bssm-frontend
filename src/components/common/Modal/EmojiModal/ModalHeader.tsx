import XIcon from "@/global/assets/svgs/XIcon";
import HoldingBackTears from "@/global/assets/svgs/emojis/HoldingBackTears";
import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";

interface IModalHeaderProps {
  handleClickCloseButton: () => void;
}

const ModalHeader = ({ handleClickCloseButton }: IModalHeaderProps) => {
  return (
    <Container>
      <HoldingBackTears width={14} height={14} isHover />
      <Title />
      <CloseButton onClick={handleClickCloseButton}>
        <XIcon width={10} height={10} />
      </CloseButton>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  padding: 10px 0 10px 14px;
  display: flex;
  gap: 6px;
  align-items: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
`;

const Title = styled.span`
  ${font.p3};
  font-weight: 600;
  color: ${color.black};

  &:after {
    content: "이모티콘";
  }
`;

const CloseButton = styled.button`
  margin: 0 20px 0 auto;
`;

export default ModalHeader;
