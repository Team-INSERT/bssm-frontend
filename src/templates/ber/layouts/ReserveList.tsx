import styled from "styled-components";
import { theme, flex, font } from "@/styles";
import { useBer } from "../hooks";
import { BerReserveListProps } from "../types/@props";

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
  ${flex.COLUMN_FLEX};
  gap: 12px;
`;

const BerReserveListItem = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px 30px;
  background-color: ${theme.white};
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
  background-color: ${theme.primary_red};
  color: ${theme.white};
`;

export default ReserveList;
