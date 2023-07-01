import color from "@/styles/color";
import React from "react";
import styled from "styled-components";
import { font } from "@/styles/font";
import Row from "../Flex/Row";

const JoinCheckBox = () => {
  return (
    <Container>
      <HGroup>
        <Date>7월 1주차</Date>
        <Row gap="4px">
          <RoomNumber>334</RoomNumber>
          <UserName>박우빈</UserName>
        </Row>
      </HGroup>
      <CheckButton disabled />
    </Container>
  );
};

const Container = styled.section`
  width: 40%;
  height: 140px;
  border-radius: 5px;
  background-color: ${color.white};
  display: flex;
  padding: 18px 0;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const HGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-right: auto;
  padding-left: 18px;
`;

const Date = styled.span`
  ${font.H6};
  color: ${color.gray};
`;

const RoomNumber = styled.span`
  ${font.H6};

  &:after {
    content: "호";
  }
`;

const UserName = styled.span`
  ${font.H6};
`;

const CheckButton = styled.button`
  width: 78%;
  height: 32px;
  background-color: ${color.primary_blue};
  border-radius: 3px;
  color: ${color.white};
  ${font.btn3};

  &:after {
    content: "입사 체크하기";
  }

  &:disabled {
    background-color: ${color.content};

    &:after {
      content: "입사 체크완료";
    }
  }
`;

export default JoinCheckBox;
