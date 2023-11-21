import { Category, Input } from "@/components/atoms";
import { flex, font } from "@/styles";
import { Aside } from "@/components/common";
import React from "react";
import styled from "styled-components";
import ReserveJoinBox from "./ReserveJoinBox";
import ReserveMap from "./ReserveMap";
import ReserveList from "./ReserveList";
import { useBer } from "../hooks";
import { BER } from "../constants";

const BerPage = () => {
  const {
    reserve,
    date,
    currentRoom,
    setCurrentRoom,
    handleRoomButtonClick,
    handleSetDateChange,
    berViewType,
    setBerViewType,
  } = useBer();

  return (
    <>
      <Layout>
        <PageTitleText>🚪 베르실 예약</PageTitleText>
        <CategoryBox>
          {[BER.신청하기, BER.예약목록].map((filter) => (
            <Category
              key={filter}
              id={filter}
              name={BER.RESERVE}
              selected={berViewType === filter}
              onClick={() => setBerViewType(filter)}
              label={filter}
            />
          ))}
        </CategoryBox>
        <Input
          type="date"
          onChange={handleSetDateChange}
          value={date}
          label="조회할 날짜를 입력하세요"
          width="fit-content"
        />
        {berViewType === BER.신청하기 && (
          <ReservationBox>
            <ReserveMap
              currentRoom={currentRoom}
              handleClick={handleRoomButtonClick}
              reservedList={reserve.reservedBerNumber}
            />
            <ReserveJoinBox
              currentRoom={currentRoom}
              setCurrentRoom={setCurrentRoom}
              date={date}
            />
          </ReservationBox>
        )}
        {berViewType === BER.예약목록 && (
          <ReserveList reserveList={reserve.berResList} />
        )}
      </Layout>
      <Aside />
    </>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN_HORIZONTAL};
  gap: 20px;
`;

const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const PageTitleText = styled.span`
  ${font.H2};
`;

const ReservationBox = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0px 20px;
  ${flex.COLUMN_FLEX};
  gap: 12px;
`;

export default BerPage;
