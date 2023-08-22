import { color, flex } from "@/styles";
import React from "react";
import styled from "styled-components";
import BambooHeader from "./BambooHeader";
import BambooFilter from "./BambooFilter";
import BambooManagePostListItem from "./BambooManagePostListItem";

const BambooManageModal = () => {
  return (
    <Container>
      <BambooHeader />
      <BambooBody>
        <BambooFilter />
        <BambooPostListBox>
          {Array.from({ length: 10 }).map((_, i) => (
            <BambooManagePostListItem key={i} />
          ))}
        </BambooPostListBox>
      </BambooBody>
    </Container>
  );
};

const Container = styled.div`
  width: 60vw;
  height: 90vh;
  overflow-y: scroll;
  background-color: ${color.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const BambooBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 22px;
  ${flex.COLUMN};
  gap: 12px;
`;

const BambooPostListBox = styled.div`
  ${flex.COLUMN};
  gap: 14px;
`;

export default BambooManageModal;
