import { DesktopIcon } from "@/assets/icons";
import { Column } from "@/components/Flex";
import { Aside } from "@/components/common";
import { color, flex, font } from "@/styles";
import { emptyReserve } from "@/assets/data";
import { IReserveList } from "@/interfaces";
import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { reserveViewTypeStore } from "@/store/reserveViewType.store";
import ReserveJoinBox from "./layouts/ReserveJoinBox";
import ReserveCategories from "./layouts/ReserveCategories";
import ReserveMap from "./layouts/ReserveMap";
import { useReserveListQuery } from "./services/query.service";
import ReserveList from "./layouts/ReserveList";

const ReservePage = () => {
  const reserveViewType = useRecoilValue(reserveViewTypeStore);
  const [date, setDate] = React.useState(dayjs().format("YYYY-MM-DD"));
  const [reserve, setReserve] = React.useState<IReserveList>(emptyReserve);
  const { data, isSuccess, refetch } = useReserveListQuery({ date });

  React.useEffect(() => {
    refetch();
  }, [date]);

  React.useEffect(() => {
    if (isSuccess) setReserve(data);
  }, [data, isSuccess]);

  return (
    <Layout>
      <Container>
        <Column width="100%" gap="20px">
          <Title />
          <ReserveCategories />
          <Column gap="8px">
            <StyledTitle>조회할 날짜를 입력하세요</StyledTitle>
            <StyledInputDate
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </Column>
          {reserveViewType === "신청하기" && (
            <ReservationBox>
              <ReserveMap reservedList={reserve?.reservedBerNumber} />
              <ReserveJoinBox date={date} />
            </ReservationBox>
          )}
          {reserveViewType === "목록 보기" && (
            <ReserveList reserveList={reserve?.berResList} />
          )}
        </Column>
        <Aside />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.CENTER};
`;

const Container = styled.div`
  width: 76%;
  display: flex;
  gap: 8px;
`;

const Title = styled.span`
  ${font.H2};

  &:after {
    content: "🚪 베르실 예약";
  }
`;

const ReservationBox = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  ${flex.COLUMN};
  gap: 12px;
`;

const StyledInputDate = styled.input`
  width: fit-content;
  padding: 6px 16px;
  ${font.p2};
  background-color: ${color.white};
`;

const StyledTitle = styled.span`
  ${font.p2};
  font-weight: 500;
`;

export default ReservePage;
