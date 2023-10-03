import styled from "styled-components";
import dayjs from "dayjs";
import ICalenderItem from "@/interfaces/calenderItem.interface";
import CalenderListItem from "./CalenderListItem";

interface ICalenderListProps {
  currentMonth: number;
  calenderList: Array<ICalenderItem>;
}

const CalenderList = ({ currentMonth, calenderList }: ICalenderListProps) => {
  const firstDayOfMonth = dayjs()
    .year(new Date().getFullYear())
    .month(currentMonth - 1)
    .date(1);
  const dayOfWeek = firstDayOfMonth.day();

  return (
    <Container>
      {Array.from({ length: dayOfWeek }).map((_, i) => (
        <CalenderListItem key={i} calender={calenderList[0]} isEmpty />
      ))}
      {calenderList?.map((calender) => (
        <CalenderListItem key={calender.date} calender={calender} />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5%;
`;

export default CalenderList;
