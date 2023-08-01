import React from "react";
import styled from "styled-components";
import LostFoundFilter from "./LostFoundFIlter";
import LostFoundList from "./LostFoundList";
import States from "./States";

const LostFoundBox = () => {
  return (
    <Container>
      <LostFoundFilter />
      <States />
      <LostFoundList />
    </Container>
  );
};

const Container = styled.main`
  width: 67%;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export default LostFoundBox;
