import { color, flex, font } from "@/styles";
import { CalenderIcon } from "@/assets/icons";
import getPlanType from "@/helpers/getPlanType.helper";
import React from "react";
import styled from "styled-components";
import HomeHead from "./HomeHead";

interface IHomeCalenderProps {
  calenders: Array<{
    id: number;
    title: string;
    type: string;
  }>;
}

const HomeCalender = ({ calenders }: IHomeCalenderProps) => {
  return (
    <Container>
      <HomeHead icon={<CalenderIcon />} title="오늘의 일정" href="/calender" />
      <CalenderBody>
        {calenders?.map((calender) => (
          <CalenderContent>
            - {calender.title} <span>{getPlanType(calender.type)}</span>
          </CalenderContent>
        ))}
        {!calenders.length && (
          <CalenderContent>
            <span>등록된 일정이 없어요.</span>
          </CalenderContent>
        )}
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

const CalenderContent = styled.p`
  ${font.p2};
  padding-left: 6px;
  white-space: pre;
  line-height: 160%;

  span {
    ${font.p4};
    color: ${color.gray};
  }
`;

export default HomeCalender;
