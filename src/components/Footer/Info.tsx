import React from "react";
import styled from "styled-components";
import color from "@/styles/color";
import Image from "next/image";
import { font } from "@/styles/font";
import Column from "../Flex/Column";
import Row from "../Flex/Row";

import QR from "./assets/QR.png";

const Info = () => {
  const { name, service, headline, serviceInfo, policy, inquery, copyRight } = {
    name: "BSM",
    service: "부산소마고 학생 정보 관리 시스템",
    headline: "이용약관 | 개인정보처리방침",
    serviceInfo: `부산소마고학생정보관리시스템 | 대표 : 이현준 | 부산광역시 강서구 가락대로 1393`,
    policy: "개인정보책임관리자 : 김호현 | 소개 사이트 : insert.com",
    inquery: "비즈니스 문의 : insert@gmail.com",
    copyRight: "© 2023. team insert. All rights reserved.",
  };

  return (
    <Container>
      <HGroup>
        <Column>
          <Title>{name}</Title>
          <SubTitle>{service}</SubTitle>
          <PolicyText>{headline}</PolicyText>
        </Column>
      </HGroup>
      <Section>
        <Row>
          <Column gap="2px">
            <PolicyText>{service}</PolicyText>
            <PolicyText>{serviceInfo}</PolicyText>
            <PolicyText>{policy}</PolicyText>
            <PolicyText>{inquery}</PolicyText>
            <Copyright>{copyRight}</Copyright>
          </Column>
          <QRCode src={QR} alt="QRCODE" />
        </Row>
      </Section>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  ${font.H2};
`;

const HGroup = styled.hgroup`
  border-bottom: 1px solid ${color.content};
  padding-bottom: 2%;
  margin-bottom: 2%;
`;

const Section = styled.section``;

const SubTitle = styled.span`
  ${font.H5};
  margin-bottom: 3%;
`;

const PolicyText = styled.span`
  ${font.p4};
  color: ${color.content};
`;

const Copyright = styled.span`
  margin-top: 4%;
  ${font.p4};
  color: ${color.content};
`;

const QRCode = styled(Image)`
  margin-left: auto;
`;

export default Info;
