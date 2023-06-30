import color from "@/styles/color";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Check from "./assets/check.svg";

const JoinCheckBox = () => {
  return (
    <Container>
      <Image src={Check} alt="check" width={90} height={90} />
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

export default JoinCheckBox;
