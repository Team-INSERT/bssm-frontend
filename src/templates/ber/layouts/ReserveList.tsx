import { color, flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { useBer } from "../hooks";
import { BerReserveListProps } from "../interfaces";

const ReserveList = ({ reserveList }: BerReserveListProps) => {
  const { isBerReserverSameAsUser, handleBerReserveDeleteClick } = useBer();

  return (
    <Container>
      {reserveList.map((reserve) => (
        <BerReserveListItem>
          <BerReserveInformationText>
            베르 {reserve.berNumber}실 예약
          </BerReserveInformationText>
          <BerReserveInformationText>
            · {reserve.user.name}님
          </BerReserveInformationText>
          <BerReserveInformationText>
            | {reserve.reservationUsersName}
          </BerReserveInformationText>
          {isBerReserverSameAsUser(reserve.user.id) && (
            <ReserveCancelButton
              onClick={() => handleBerReserveDeleteClick(reserve.id)}
            >
              예약 취소
            </ReserveCancelButton>
          )}
        </BerReserveListItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${flex.COLUMN};
  gap: 12px;
`;

const BerReserveListItem = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px 30px;
  background-color: ${color.white};
  display: flex;
  gap: 4px;
`;

const BerReserveInformationText = styled.div`
  ${font.p2};
`;

const ReserveCancelButton = styled.button`
  margin-left: auto;
  width: fit-content;
  padding: 6px 10px;
  border-radius: 4px;
  background-color: ${color.primary_red};
  color: ${color.white};
`;

export default ReserveList;
