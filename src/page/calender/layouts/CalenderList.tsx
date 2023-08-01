import styled from "styled-components";
import CalenderListItem from "./CalenderListItem";

const CalenderList = () => {
  return (
    <Container>
      {Array.from({ length: 10 }).map((_, index) => (
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
