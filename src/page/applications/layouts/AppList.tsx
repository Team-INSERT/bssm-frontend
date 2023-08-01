import styled from "styled-components";
import AppListItem from "./AppListItem";

const AppList = () => {
  return (
    <Container>
      {Array.from({ length: 7 }).map((_, x) => (
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
