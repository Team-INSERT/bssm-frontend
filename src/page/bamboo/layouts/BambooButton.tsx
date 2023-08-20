import { Arrow } from "@/assets/icons";
import { Column, Row } from "@/components/Flex";
import { color, flex, font } from "@/styles";
import Image, { StaticImageData } from "next/image";
import React from "react";
import styled from "styled-components";

interface IBambooButtonProps {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

const BambooButton = ({ icon, title, subtitle }: IBambooButtonProps) => {
  return (
    <StyledButton>
      <Row gap="1vw" alignItems="center">
        <Image src={icon} alt="" width={44} height={44} />
        <Column>
          <StyledButtonTitle>{title}</StyledButtonTitle>
          <StyledButtonSubTitle>{subtitle}</StyledButtonSubTitle>
        </Column>
      </Row>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 24vw;
  background-color: ${color.white};
  border-radius: 8px;
  ${flex.CENTER};
  justify-content: space-between;
  padding: 10px 1.5vw;
`;

const StyledButtonTitle = styled.h1`
  ${font.H6};
  margin-right: auto;
`;

const StyledButtonSubTitle = styled.p`
  ${font.p3};
  word-break: keep-all;
  text-align: left;
`;

export default BambooButton;
