import HoldingBackTears from "@/global/assets/svgs/emojis/HoldingBackTears";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";

const ModalHeader = () => {
  return (
    <Container>
      <HoldingBackTears width={18} height={18} isHover />
      <Title />
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  padding: 8px 0 8px 12px;
  display: flex;
  gap: 6px;
  align-items: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
`;

const Title = styled.span`
  ${font.H6};

  &:after {
    content: "이모지";
  }
`;

export default ModalHeader;
