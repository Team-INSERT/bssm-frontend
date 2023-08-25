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
        <Column width="67%" gap="12px">
          <Title />
          <ReserveBox />
          <ReserveJoinBox />
        </Column>
        <Aside />
      </Container>
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
  gap: 18px;
`;

const Title = styled.span`
  ${font.H2};

  &:after {
    content: "🚪 베르실 예약";
  }
`;

export default ReservePage;
