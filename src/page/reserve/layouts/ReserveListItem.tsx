import useUser from "@/hooks/useUser";
import { IReserve } from "@/interfaces";
import { color, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { useDeleteReserveMutation } from "../services/mutation.service";

interface IReserveListItemProps {
  reserve: IReserve;
}

const ReserveListItem = ({ reserve }: IReserveListItemProps) => {
  const { user } = useUser();
  const { mutate } = useDeleteReserveMutation();

  const handleReserveDeleteClick = () => {
    mutate(reserve.id);
  };

  return (
    <Container>
      <StyledTitle>베르 {reserve.berNumber}실 예약</StyledTitle>
      <StyledTitle> · {reserve.user.name}님</StyledTitle>
      <StyledTitle>| {reserve.reservationUsersName}</StyledTitle>
      {reserve.user.id === user.id && (
        <ReserveCancelButton onClick={handleReserveDeleteClick} />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px 30px;
  background-color: ${color.white};
  display: flex;
  gap: 4px;
`;

const StyledTitle = styled.div`
  ${font.p2};
`;

const ReserveCancelButton = styled.button`
  margin-left: auto;
  width: fit-content;
  padding: 6px 10px;
  border-radius: 4px;
  background-color: ${color.primary_red};
  color: ${color.white};

  &:after {
    content: "예약 취소";
  }
`;

export default ReserveListItem;
