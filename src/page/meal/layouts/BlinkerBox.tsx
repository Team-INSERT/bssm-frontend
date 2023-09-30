import { color, flex } from "@/styles";
import React from "react";
import styled from "styled-components";

const BlinkerBox = () => {
  return (
    <Container>
      <Red />
      <Yellow />
      <Green />
    </Container>
  );
};

const Container = styled.div`
  ${flex.VERTICAL};
  gap: 6px;
  margin-right: auto;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 25px;
`;

const Red = styled(Circle)`
  background-color: ${color.primary_red};
`;

const Yellow = styled(Circle)`
  background-color: ${color.primary_yellow};
`;

const Green = styled(Circle)`
  background-color: ${color.primary_mint};
`;

export default BlinkerBox;
