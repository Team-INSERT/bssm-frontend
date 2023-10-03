import { DesktopIcon } from "@/assets/icons";
import { Column } from "@/components/Flex";
import { Aside } from "@/components/common";
import { flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import ReserveBox from "./layouts/ReserveBox";
import ReserveJoinBox from "./layouts/ReserveJoinBox";

const ReservePage = () => {
  return (
    <Layout>
      <Container>
        <Column width="100%" gap="12px">
          <Title />
          <ReserveBox />
          <ReserveJoinBox />
        </Column>
        <Aside />
      </Container>
      <ResponsiveBox>
        <DesktopIcon />
        <ResponsiveText />
      </ResponsiveBox>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.CENTER};
`;

const Container = styled.div`
  width: 76%;
  display: flex;
  gap: 8px;

  @media screen and (max-width: 1136px) {
    display: none;
  }
`;

const Title = styled.span`
  ${font.H2};

  &:after {
    content: "🚪 베르실 예약";
  }
`;

const ResponsiveBox = styled.div`
  height: 70vh;
  ${flex.COLUMN_CENTER};
  gap: 12px;
  display: none;

  @media screen and (max-width: 1136px) {
    display: flex;
  }
`;

const ResponsiveText = styled.span`
  &:after {
    content: "데스크톱 모드로 이용해주세요";
  }
`;

export default ReservePage;
