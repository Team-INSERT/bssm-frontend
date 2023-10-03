import styled from "styled-components";
import { color } from "@/styles";
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
  width: 100%;
  background-color: ${color.white};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 24px 32px 24px 32px;
  gap: 24px;
`;

export default ScheduleBox;
