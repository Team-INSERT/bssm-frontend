import styled from "styled-components";
import { flex, font } from "@/styles";
import { getColorByDayName } from "../helpers";

const WeekDayHeaderBox = () => {
  return (
    <WeekList>
      {["일", "월", "화", "수", "목", "금", "토"].map((weekday) => (
        <WeekListItemText key={weekday} day={weekday}>
          {weekday}요일
        </WeekListItemText>
      ))}
    </WeekList>
  );
};

const WeekList = styled.article`
  display: flex;
  width: 100%;
  gap: 1.5%;
  padding: 16px 0;
`;

const WeekListItemText = styled.div<{ day: string }>`
  width: 100%;
  ${font.code};
  font-weight: 600;
  color: ${({ day }) => getColorByDayName(day)};
  ${flex.CENTER};
`;

export default WeekDayHeaderBox;
