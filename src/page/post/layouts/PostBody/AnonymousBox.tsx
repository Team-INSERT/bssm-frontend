import color from "@/styles/color";
import { font } from "@/styles/font";
import Image from "next/image";
import React from "react";
import Check from "@/page/post/assets/Check.svg";
import styled, { css } from "styled-components";

const AnonymousBox = () => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <Container onClick={() => setClicked(!clicked)}>
      <AnonymousLabel>익명</AnonymousLabel>
      <AnonymousButton clicked={clicked}>
        <Image src={Check} alt="check" width={10} height={10} />
      </AnonymousButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const AnonymousLabel = styled.span`
  ${font.p2};
  color: ${color.gray};
`;

const AnonymousButton = styled.button<{ clicked: boolean }>`
  width: 18px;
  height: 18px;
  border: 1.5px solid ${color.on_tertiary};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: "transparent";
  ${({ clicked }) =>
    clicked &&
    css`
      background-color: ${color.primary_blue};
      border: none;
    `}
`;

export default AnonymousBox;
