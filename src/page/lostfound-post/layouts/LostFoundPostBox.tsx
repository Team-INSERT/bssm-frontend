import color from "@/styles/color";
import React from "react";
import styled from "styled-components";
import LostFoundBody from "./LostFoundBody";
import LostFoundHead from "./LostFoundHead";

const LostFoundPostBox = () => {
  return (
    <Container>
      <LostFoundHead />
      <LostFoundBody />
    </Container>
  );
};

const Container = styled.div`
  width: 76%;
  border-radius: 4px;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  padding: 22px 32px;
  gap: 4px;
`;

export default LostFoundPostBox;
