import color from "@/styles/color";
import React from "react";
import styled from "styled-components";
import ModalHeader from "./ModalHeader";
import ModalList from "./ModalList";

const EmojiModal = () => {
  return (
    <Container>
      <ModalHeader />
      <ModalList />
    </Container>
  );
};

const Container = styled.div`
  width: 30vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1);
`;

export default EmojiModal;
