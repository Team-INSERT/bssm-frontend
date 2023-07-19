import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Column from "../../Flex/Column";
import Row from "../../Flex/Row";

const InfomationBox = () => {
  return (
    <Container>
      <ProfileImage src="/" alt="profile" width={50} height={50} />
      <Column>
        <UserGrade>2학년 2반 10번</UserGrade>
        <Row gap="4px">
          <UserName>박우빈</UserName>
          <UserType>학생</UserType>
        </Row>
      </Column>
      <InfomationButton />
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 85px;
  background-color: ${color.white};
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0px 18px;
  border-radius: 5px;
`;

const UserGrade = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

const UserName = styled.span`
  ${font.H4};
`;

const UserType = styled.span`
  margin-top: auto;
  ${font.p3};
  color: ${color.gray};
`;

const InfomationButton = styled.button`
  width: 76px;
  height: 26px;
  background-color: ${color.primary_blue};
  border-radius: 5px;
  display: block;
  margin-left: auto;

  &:after {
    ${font.btn3};
    color: ${color.white};
    content: "내 정보";
  }
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  background-color: black;
  flex-shrink: 0;
`;

export default InfomationBox;
