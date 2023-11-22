import styled from "styled-components";
import { flex, font } from "@/styles";
import { Aside } from "@/components/common";
import ApplicationListItem from "./ApplicationListItem";
import { applicationListData } from "../assets/data";

const ApplicationsPage = () => {
  return (
    <>
      <Layout>
        <PageTitleText>외부 서비스</PageTitleText>
        <ApplicationList>
          {applicationListData.map((application) => (
            <ApplicationListItem key={application.href} {...application} />
          ))}
        </ApplicationList>
      </Layout>
      <Aside />
    </>
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
  ${flex.COLUMN_FLEX};
  gap: 8px;
`;

export default ApplicationsPage;
