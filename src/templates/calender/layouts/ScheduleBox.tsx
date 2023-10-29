import React from "react";
import styled from "styled-components";
import { color } from "@/styles";
import { Column, Row } from "@/components/Flex";
import { Arrow } from "@/assets/icons";
import DateBox from "./DateBox";
import WeekBox from "./WeekBox";
import CalenderList from "./CalenderList";
import { useCalenderListQuery } from "../services/query.service";

const ScheduleBox = () => {
  const [currentMonth, setCurrentMonth] = React.useState(
    new Date().getMonth() + 1,
  );
  const { data: calenderList, refetch } = useCalenderListQuery({
    currentMonth,
  });

  React.useEffect(() => {
    refetch();
  }, [currentMonth, refetch]);

  React.useEffect(() => {
    const handleSetDateKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setCurrentMonth((m) => (m <= 1 ? m : m - 1));
      if (e.key === "ArrowRight") setCurrentMonth((m) => (m >= 12 ? m : m + 1));
    };

    window.addEventListener("keydown", handleSetDateKeyDown);
    return () => {
      window.removeEventListener("keydown", handleSetDateKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Row gap="12px" width="100%">
      <Arrow
        direction="left"
        cursor="pointer"
        onClick={() => setCurrentMonth((m) => (m <= 1 ? m : m - 1))}
        color={color.on_tertiary}
      />
      <Container>
        <DateBox currentMonth={currentMonth} />

        <Column gap="18px">
          <WeekBox />
          <CalenderList
            currentMonth={currentMonth}
            calenderList={calenderList}
          />
        </Column>
      </Container>
      <Arrow
        direction="right"
        cursor="pointer"
        onClick={() => setCurrentMonth((m) => (m >= 12 ? m : m + 1))}
        color={color.on_tertiary}
      />
    </Row>
  );
};

const Container = styled.main`
  width: 100%;
  background-color: ${color.white};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  gap: 36px;
`;

export default ScheduleBox;
