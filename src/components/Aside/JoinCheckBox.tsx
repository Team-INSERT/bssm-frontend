import color from "@/styles/color";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Check from "./assets/check.svg";

const JoinCheckBox = () => {
  return (
    <Container>
      <Checker src={Check} alt="check" />
    </Container>
  );
};

const Container = styled.section`
  width: 40%;
  height: 140px;
  border-radius: 5px;
  background-color: ${color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checker = styled(Image)`
  width: 80px;
  height: 80px;
`;

export default JoinCheckBox;
