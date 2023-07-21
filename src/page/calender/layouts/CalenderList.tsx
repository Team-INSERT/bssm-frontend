import React from "react";
import styled from "styled-components";
import CalenderListItem from "./CalenderListItem";

const CalenderList = () => {
  return (
    <Container>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
        <CalenderListItem key={index} />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default CalenderList;
