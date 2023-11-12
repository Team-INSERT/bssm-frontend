import styled from "styled-components";
import { flex, font } from "@/styles";
import ApplicationListItem from "./ApplicationListItem";
import { applicationList } from "../assets/data";

const ApplicationsPage = () => {
  return (
    <Layout>
      <PageTitleText>외부 서비스</PageTitleText>
      <ApplicationList>
        {applicationList.map((application) => (
          <ApplicationListItem key={application.href} {...application} />
        ))}
      </ApplicationList>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN_VERTICAL};
  gap: 8px;
`;

const PageTitleText = styled.span`
  ${font.H3};
`;

const ApplicationList = styled.div`
  ${flex.COLUMN};
  gap: 8px;
`;

export default ApplicationsPage;
