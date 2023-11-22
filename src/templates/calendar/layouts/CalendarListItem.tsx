import dayjs from "dayjs";
import styled from "styled-components";
import { theme, flex, font } from "@/styles";
import { useCalendar } from "../hooks";
import { getColorByPlanType } from "../helpers";
import CalendarPlanWriterInformationModal from "./CalendarPlanWriterInformationModal";
import { CalendarListItemProps } from "../types/@props";
import { CalendarPlan } from "../types";

const CalendarListItem = ({ calendar, isEmpty }: CalendarListItemProps) => {
  const { handleOpenModalClick, handleDeleteCalendarPlanClick } = useCalendar();

  return (
    <Container isEmpty={isEmpty}>
      <CalendarHead>{dayjs(calendar?.date).format("DD")}</CalendarHead>
      <CalendarBody>
        {calendar?.plans.map((plan: CalendarPlan) => (
          <CalendarPlanBox
            key={plan.id}
            type={plan.type}
            onClick={() => handleDeleteCalendarPlanClick(plan.id)}
          >
            {plan.title}
            <CalendarPlanWriterInformationModal {...plan} />
          </CalendarPlanBox>
        ))}
        <CalendarPlanAddButton
          onClick={() => {
            handleOpenModalClick(calendar?.date);
          }}
        >
          +
        </CalendarPlanAddButton>
      </CalendarBody>
    </Container>
  );
};

const Container = styled.li<{ isEmpty?: boolean }>`
  width: 13%;
  ${flex.COLUMN_FLEX};
  opacity: ${({ isEmpty }) => (isEmpty ? 0 : 1)};
`;

const CalendarHead = styled.header`
  ${font.H5};
  width: 100%;
  border-top: 1px solid ${theme.black};
  padding: 10px 0;
`;

const CalendarBody = styled.section`
  ${font.caption};
  width: 90%;
  min-height: 26vh;
  word-break: break-all;
  height: fit-content;
  ${flex.COLUMN_FLEX};
  gap: 8px;
`;

const CalendarPlanBox = styled.div<{ type: string }>`
  width: 100%;
  padding: 6px 10px;
  ${font.caption};
  color: ${theme.white};
  cursor: pointer;
  position: relative;

  ${({ type }) => getColorByPlanType(type)}
  &:hover {
    & > div {
      ${flex.COLUMN_CENTER};
    }
  }
`;

const CalendarPlanAddButton = styled.button`
  background-color: ${theme.light_gray};
  color: ${theme.black};
  width: 100%;
  padding: 6px 0;
`;

export default CalendarListItem;
