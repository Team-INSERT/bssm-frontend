import styled from "styled-components";
import { theme, flex, font } from "@/styles";
import { useBer } from "../hooks";
import { BerReserveListProps } from "../types/@props";

const ReserveList = ({ reserveList }: BerReserveListProps) => {
  const { isBerReserverSameAsUser, handleBerReserveDeleteClick } = useBer();

  return (
    <Container>
      {reserveList.map((reserve) => (
        <BerReserveListItem key={reserve.id}>
          <BerReserveInformationContainer>
            <BerReserveInformationText>베르 1실 예약</BerReserveInformationText>
            <BerReserveInformationBox>
              <BerReserveInformationText>
                <UserNameText>{reserve.user.name}김영은</UserNameText> 님 |
              </BerReserveInformationText>
              <BerReserveInformationText>
                <UserListText>
                  {reserve.reservationUsersName} 전영현 김시연 강민지 최성훈
                </UserListText>
              </BerReserveInformationText>
              {isBerReserverSameAsUser(reserve.user.id) && (
                <ReserveCancelButton
                  onClick={() => handleBerReserveDeleteClick(reserve.id)}
                >
                  예약 취소
                </ReserveCancelButton>
              )}
            </BerReserveInformationBox>
          </BerReserveInformationContainer>
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
  flex-direction: column;
  gap: 4px;
`;

const BerReserveInformationContainer = styled.div`
  ${flex.COLUMN_FLEX};
  gap: 4px;
`;

const BerReserveInformationText = styled.div`
  ${font.p2};
`;

const BerReserveInformationBox = styled.div`
  ${flex.FLEX};
`;

const UserNameText = styled.span`
  ${font.H5};
  font-weight: 600;
`;

const UserListText = styled.div`
  width: 100%;
  margin-left: 1.5%;
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
