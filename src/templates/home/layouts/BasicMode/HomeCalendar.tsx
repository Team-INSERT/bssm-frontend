import styled from "styled-components";
import { theme, flex, font } from "@/styles";
import { CalendarIcon } from "@/assets/icons";
import { getPlanNameByPlanType } from "@/templates/calendar/helpers";
import HomeHead from "./HomeHead";

interface HomeCalendarProps {
  calenders: Array<{
    id: number;
    title: string;
    type: string;
  }>;
}

const HomeCalendar = ({ calenders }: HomeCalendarProps) => {
  return (
    <Container>
      <HomeHead icon={<CalendarIcon />} title="오늘의 일정" href="/calendar" />
      <CalendarBody>
        {calenders?.map((calendar) => (
          <CalendarContent>
            - {calendar.title}{" "}
            <span>{getPlanNameByPlanType(calendar.type)}</span>
          </CalendarContent>
        ))}
        {!calenders.length && (
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
  background-color: ${theme.white};
  ${flex.COLUMN_FLEX};
`;

const CalendarBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px 24px;
  ${flex.COLUMN_FLEX};
`;

const CalendarContent = styled.p`
  ${font.p2};
  padding-left: 6px;
  white-space: pre;
  line-height: 160%;

  span {
    ${font.p4};
    color: ${theme.gray};
  }
`;

export default HomeCalendar;
