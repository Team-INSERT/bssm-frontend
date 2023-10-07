import styled from "styled-components";
import { applicaionList } from "@/_fixture";
import AppListItem from "./AppListItem";

const AppList = () => {
  return (
    <Container>
      {applicaionList.map((app) => (
        <AppListItem key={app.href} {...app} />
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
