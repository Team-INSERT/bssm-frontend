import { color, flex, font } from "@/styles";
import dayjs from "dayjs";
import styled from "styled-components";
import { CalenderListItemProps } from "../interfaces";
import useCalender from "../hooks/useCalender";
import { getColorByPlanType } from "../helpers";
import CalenderPlanWriterInformationModal from "./CalenderPlanWriterInformationModal";

const CalenderListItem = ({ calender, isEmpty }: CalenderListItemProps) => {
  const { handleOpenModalClick, handleDeleteCalenderPlanClick } = useCalender();

  return (
    <Container isEmpty={isEmpty}>
      <CalenderHead>{dayjs(calender?.date).format("DD")}</CalenderHead>
      <CalenderBody>
        {calender?.plans.map((plan) => (
          <CalenderPlanBox
            type={plan.type}
            onClick={() => handleDeleteCalenderPlanClick(plan.id)}
          >
            {plan.title}
            <CalenderPlanWriterInformationModal {...plan} />
          </CalenderPlanBox>
        ))}
        <CalenderPlanAddButton
          onClick={() => handleOpenModalClick(calender?.date)}
        >
          +
        </CalenderPlanAddButton>
      </CalenderBody>
    </Container>
  );
};

const Container = styled.li<{ isEmpty?: boolean }>`
  width: 13%;
  ${flex.COLUMN};
  opacity: ${({ isEmpty }) => (isEmpty ? 0 : 1)};
`;

const CalenderHead = styled.header`
  ${font.H5};
  width: 100%;
  border-top: 1px solid ${color.black};
  padding: 10px 0;
`;

const CalenderBody = styled.section`
  ${font.caption};
  width: 90%;
  min-height: 26vh;
  word-break: break-all;
  height: fit-content;
  ${flex.COLUMN};
  gap: 8px;
`;

const CalenderPlanBox = styled.div<{ type: string }>`
  width: 100%;
  padding: 6px 10px;
  ${font.caption};
  color: ${color.white};
  cursor: pointer;
  position: relative;

  ${({ type }) => getColorByPlanType(type)}
  &:hover {
    & > div {
      ${flex.COLUMN_CENTER};
    }
  }
`;

const CalenderPlanAddButton = styled.button`
  background-color: ${color.light_gray};
  color: ${color.black};
  width: 100%;
  padding: 6px 0;
`;

export default CalenderListItem;
