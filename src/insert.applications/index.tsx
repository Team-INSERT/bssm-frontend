import styled from "styled-components";
import { Aside } from "@/_components/common";
import { Column } from "@/_components/Flex";
import { font } from "@/_styles";
import AppList from "./layouts/AppList";

const ApplicationsPage = () => {
  return (
    <Layout>
      <Container>
        <Column width="100%" gap="12px">
          <StyledTitle />
          <AppList />
        </Column>
        <Aside />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 76%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const StyledTitle = styled.span`
  ${font.H3};

  &:after {
    content: "외부 서비스";
  }
`;

export default ApplicationsPage;
