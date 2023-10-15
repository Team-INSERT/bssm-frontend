import { color, flex, font } from "@/styles";
import { CalenderIcon } from "@/assets/icons";
import React from "react";
import styled from "styled-components";
import HomeHead from "./HomeHead";

const HomeCalender = () => {
  return (
    <Container>
      <HomeHead icon={<CalenderIcon />} title="오늘의 일정" href="/Calender" />
      <CalenderBody>
        <CalenderType>학년일정</CalenderType>
        <CalenderContent>
          - asdmlkasnl
          <br />
          - asdmlkasnl
          <br />
          - asdmlkasnl
          <br />- asdmlkasnl
        </CalenderContent>
      </CalenderBody>
    </Container>
  );
};

const Container = styled.div`
  width: 46%;
  height: 30vh;
  border-radius: 4px;
  background-color: ${color.white};
  ${flex.COLUMN};
`;

const CalenderBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px 24px;
  ${flex.COLUMN};
`;

const CalenderType = styled.span`
  ${font.p3};
  font-weight: 500;
`;

const CalenderContent = styled.p`
  ${font.p3};
  padding-left: 6px;
  white-space: pre;
  line-height: 160%;
`;

export default HomeCalender;
