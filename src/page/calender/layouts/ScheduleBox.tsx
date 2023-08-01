import color from "@/styles/color";
import React from "react";
import styled from "styled-components";
import DateBox from "./DateBox";
import WeekBox from "./WeekBox";
import CalenderList from "./CalenderList";

const ScheduleBox = () => {
  return (
    <Container>
      <DateBox />
      <WeekBox />
      <CalenderList />
    </Container>
  );
};

const Container = styled.main`
  width: 67%;
  background-color: ${color.white};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 24px 32px 24px 32px;
  gap: 24px;
`;

export default ScheduleBox;
