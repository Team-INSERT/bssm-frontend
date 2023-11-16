import styled from "styled-components";
import React from "react";
import dayjs from "dayjs";
import { color, flex, font } from "@/styles";
import { Column, Row } from "@/components/Flex";
import DATE from "@/constants/date.constant";
import DIRECTION from "@/constants/direction.constant";
import { CalenderArrowIcon } from "../assets/data";
import { useCalenderListQuery } from "../services/query.service";
import useCalender from "../hooks/useCalender";
import WeekDayHeaderBox from "./WeekDayHeaderBox";
import CalenderListItem from "./CalenderListItem";
import { CalenderItem } from "../interfaces";
import { getPaddingDayOfMonth } from "../helpers";

const CalenderPage = () => {
  const { currentMonth, handleCalenderMonthChange } = useCalender();
  const { calenderList, refetch } = useCalenderListQuery(currentMonth);

  React.useEffect(() => {
    refetch();
  }, [currentMonth, refetch]);

  return (
    <Layout>
      <Column gap="8px" alignItems="center">
        <TitleText>🗓️ 캘린더</TitleText>
        <SubTitleText>
          좌우 화살표 방향키를 탭해 날짜를 조정해보세요.
        </SubTitleText>
      </Column>
      <Row width="100%" gap="16px">
        <CalenderArrowIcon
          direction={DIRECTION.LEFT}
          onClick={() => handleCalenderMonthChange(DATE.DECREASE)}
        />
        <CalenderBox>
          <CurrentDateText>
            {dayjs().year()}년 {currentMonth}월
          </CurrentDateText>
          <CalenderList>
            <WeekDayHeaderBox />
            {getPaddingDayOfMonth(currentMonth).map((_, key) => (
              <CalenderListItem key={key} isEmpty />
            ))}
            {calenderList?.map((calender: CalenderItem) => (
              <CalenderListItem key={calender.date} calender={calender} />
            ))}
          </CalenderList>
        </CalenderBox>
        <CalenderArrowIcon
          direction={DIRECTION.RIGHT}
          onClick={() => handleCalenderMonthChange(DATE.INCREASE)}
        />
      </Row>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN_CENTER};
  gap: 24px;
`;

const TitleText = styled.span`
  ${font.H2};
`;

const SubTitleText = styled.span`
  color: ${color.gray};
`;

const CalenderBox = styled.main`
  width: 100%;
  background-color: ${color.white};
  border-radius: 5px;
  ${flex.COLUMN};
  padding: 24px 32px;
  gap: 36px;
`;

const CurrentDateText = styled.h1`
  ${font.H2};
`;

const CalenderList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5%;
`;

export default CalenderPage;
