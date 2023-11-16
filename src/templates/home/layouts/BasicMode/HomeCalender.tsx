import { color, flex, font } from "@/styles";
import { CalendarIcon } from "@/assets/icons";
import getPlanType from "@/helpers/getPlanType.helper";
import React from "react";
import styled from "styled-components";
import HomeHead from "./HomeHead";

interface IHomeCalendarProps {
  calendars: Array<{
    id: number;
    title: string;
    type: string;
  }>;
}

const HomeCalendar = ({ calendars }: IHomeCalendarProps) => {
  return (
    <Container>
      <HomeHead icon={<CalendarIcon />} title="오늘의 일정" href="/calendar" />
      <CalendarBody>
        {calendars?.map((calendar) => (
          <CalendarContent>
            - {calendar.title} <span>{getPlanType(calendar.type)}</span>
          </CalendarContent>
        ))}
        {!calendars.length && (
          <CalendarContent>
            <span>등록된 일정이 없어요.</span>
          </CalendarContent>
        )}
      </CalendarBody>
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

const CalendarBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px 24px;
  ${flex.COLUMN};
`;

const CalendarContent = styled.p`
  ${font.p2};
  padding-left: 6px;
  white-space: pre;
  line-height: 160%;

  span {
    ${font.p4};
    color: ${color.gray};
  }
`;

export default HomeCalendar;
