import { Aside } from "@/components/common";
import { color, flex, font } from "@/styles";
import { Column, Row } from "@/components/Flex";
import { Button } from "@/components/atoms";
import React from "react";
import styled from "styled-components";
import DomitoryFilter from "./layouts/DomitoryFilter";
import DomitoryListItem from "./layouts/DomitoryListItem";

const DomitoryPage = () => {
  return (
    <Layout>
      <Container>
        <Column width="67%" gap="16px">
          <Column gap="6px">
            <Title />
            <SubTitle />
            <Row>
              <Button color={color.primary_blue}>입사 체크</Button>
            </Row>
          </Column>
          <DomitoryFilter />
          <DomitoryList>
            {Array.from({ length: 40 }).map((_, i) => (
              <DomitoryListItem key={i} />
            ))}
          </DomitoryList>
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

const Title = styled.span`
  ${font.H2};

  &:after {
    content: "🏫 기숙사 입사 현황";
  }
`;

const SubTitle = styled.span`
  ${font.context};
  color: ${color.gray};

  &:after {
    content: "BSM에서 기숙사 입사 여부를 쉽게 체크할 수 있어요.";
  }
`;

const DomitoryList = styled.div`
  width: 100%;
  ${flex.COLUMN};
  gap: 12px;
`;

export default DomitoryPage;
