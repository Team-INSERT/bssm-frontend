import { IReserve } from "@/_interfaces";
import { flex } from "@/_styles";
import React from "react";
import styled from "styled-components";
import ReserveListItem from "./ReserveListItem";

interface IReserveListProps {
  reserveList: Array<IReserve>;
}

const ReserveList = ({ reserveList }: IReserveListProps) => {
  return (
    <Container>
      {reserveList.map((reserve) => (
        <ReserveListItem reserve={reserve} />
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

export default ReserveList;
