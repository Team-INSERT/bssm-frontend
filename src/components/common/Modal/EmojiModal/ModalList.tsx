import React from "react";
import styled from "styled-components";
import ModalListItem from "./ModalListItem";

const ModalList = () => {
  return (
    <List>
      {Array.from({ length: 4 }).map((_, i) => (
        <ModalListItem key={i} />
      ))}
    </List>
  );
};

const List = styled.div`
  width: 100%;
  height: 300px;
  padding: 12px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default ModalList;
