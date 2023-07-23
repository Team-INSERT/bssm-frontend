import Column from "@/components/Flex/Column";
import Row from "@/components/Flex/Row";
import color from "@/styles/color";
import { font } from "@/styles/font";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import LinkArrow from "@/page/applications/assets/LinkArrow";

const AppListItem = () => {
  return (
    <Container>
      <Column gap="4px">
        <Row>
          <AppName>BSM Deploy</AppName>
          <LinkBox>
            <LinkText href="/" />
            <LinkArrow />
          </LinkBox>
        </Row>
        <AppDescription>
          웹사이트는 만들었는데 배포하기 어려울 때 배포를 도와주는 서비스입니다.
        </AppDescription>
      </Column>
    </Container>
  );
};

const Container = styled.article`
  width: 100%;
  height: 90px;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 32px;
  box-shadow: 0 0 10px 0 rgba(144, 144, 144, 0.1);
  border-radius: 4px;
  gap: 4px;
`;

const AppName = styled.h1`
  ${font.H4};
`;

const AppDescription = styled.p`
  ${font.p2};
  white-space: pre-wrap;
  width: fit-content;
`;

const LinkBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
`;

const LinkText = styled(Link)`
  ${font.p3};
  color: ${color.gray};
  text-decoration: none;

  &:after {
    content: "서비스 보기";
  }
`;

export default AppListItem;
