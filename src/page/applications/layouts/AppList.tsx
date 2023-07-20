import React from "react";
import styled from "styled-components";
import AppListItem from "./AppListItem";

const AppList = () => {
  return (
    <Container>
      {[1, 2, 3, 4, 5, 6, 7].map((x) => (
        <AppListItem key={x} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default AppList;
