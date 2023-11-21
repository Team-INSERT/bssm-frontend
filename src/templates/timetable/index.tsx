import styled from "styled-components";
import { color, flex, font } from "@/styles";
import React from "react";
import { Column, Row } from "@/components/Flex";
import { Aside } from "@/components/common";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { useTimeTable } from "./hooks";
import { get요일ByWeekday } from "../meister/helpers";

const TimeTablePage = () => {
  const { dayTimeTable } = useTimeTable();
  return (
    <>
      <Layout>
        <Row gap="12px" alignItems="center">
          <TitleText>🗓️ 시간표</TitleText>
          <SubTitleText>
            {dayjs().locale("ko").format("YYYY년 M월 D일")}
          </SubTitleText>
        </Row>
        {!Object.entries(dayTimeTable).length && (
          <TimeTableBox>
            <Column>
              {Array.from({ length: 8 }).map((_, i) => (
                <TableItem color={color.primary_blue}>
                  <TableHeadText>
                    {i ? `${i}교시` : "교시 \\ 요일"}
                  </TableHeadText>
                </TableItem>
              ))}
            </Column>
            {["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"].map(
              (weekday) => (
                <TableBox>
                  <TableItem color={color.primary_blue}>
                    <TableHeadText>{get요일ByWeekday(weekday)}</TableHeadText>
                  </TableItem>
                  {dayTimeTable[weekday]?.map(({ subject }) => (
                    <TableItem color={color.white}>
                      <TableText>{subject}</TableText>
                    </TableItem>
                  ))}
                </TableBox>
              ),
            )}
          </TimeTableBox>
        )}
      </Layout>
      <Aside />
    </>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN};
  gap: 8px;
`;

const TitleText = styled.h1`
  ${font.H3};
`;

const SubTitleText = styled.span`
  ${font.H6};
  font-weight: 500;
  color: ${color.gray};
`;

const TimeTableBox = styled.div`
  width: fit-content;
  background-color: white;
  border: 1px solid ${color.on_tertiary};
  border-collapse: collapse;
  display: flex;
`;

const TableBox = styled.div`
  width: fit-content;
  ${flex.COLUMN_CENTER};
  margin-bottom: auto;
`;

const TableItem = styled.div<{ color: string }>`
  width: 100%;
  text-align: center;
  border: 1px solid ${color.on_tertiary};
  background-color: ${(props) => props.color};
  color: ${(props) =>
    props.color === color.primary_blue ? color.white : color.black};
`;

const TableText = styled.div`
  ${font.p2};
  width: 10vw;
  height: 9vh;
  ${flex.CENTER};
`;

const TableHeadText = styled(TableText)`
  ${font.H6};
`;

export default TimeTablePage;
