import styled from "styled-components";
import { Aside } from "@/components/common";
import { Column } from "@/components/Flex";
import AppList from "./layouts/AppList";
import AppListFilter from "./layouts/AppListFilter";

const ApplicationsPage = () => {
  return (
    <Layout>
      <Container>
        <Column width="100%" gap="12px">
          <AppListFilter />
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

export default ApplicationsPage;
