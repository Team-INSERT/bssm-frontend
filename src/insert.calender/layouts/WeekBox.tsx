import styled from "styled-components";
import { color, flex, font } from "@/_styles";
import useDate from "@/_hooks/useDate";

const WeekBox = () => {
  const { weekdaysKOR: weekdays } = useDate();
  return (
    <Weeks>
      {weekdays.map((weekday) => (
        <Week key={weekday} day={weekday}>
          {weekday}
        </Week>
      ))}
    </Weeks>
  );
};

const Weeks = styled.article`
  display: flex;
  width: 100%;
  gap: 1.5%;
`;

const Week = styled.div<{ day: string }>`
  width: 100%;
  ${font.code};
  font-weight: 600;
  color: ${({ day }) => {
    switch (day) {
      case "토":
        return color.primary_blue;
      case "일":
        return color.primary_red;
      default:
        return color.gray;
    }
  }};

  ${flex.CENTER};

  &:after {
    content: "요일";
  }
`;

export default WeekBox;
