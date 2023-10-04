import { Column, Row } from "@/components/Flex";
import { roomStore } from "@/store/room.store";
import { color, flex, font } from "@/styles";
import React from "react";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";

interface IReserveMapProps {
  reservedList: Array<number>;
}

const ReserveMap = ({ reservedList }: IReserveMapProps) => {
  const [room, setRoom] = useRecoilState(roomStore);

  const handleRoomButtonClick = (roomNumber: number) => {
    if (reservedList.includes(roomNumber)) return;
    setRoom(roomNumber);
  };

  return (
    <Column gap="8px">
      <Row gap="8px">
        <CommonRoom
          isReserved={reservedList.includes(1)}
          isClicked={room === 1}
          onClick={() => handleRoomButtonClick(1)}
        />
        <CommonRoom
          isReserved={reservedList.includes(2)}
          isClicked={room === 2}
          onClick={() => handleRoomButtonClick(2)}
        />
        <CommonRoom
          isReserved={reservedList.includes(3)}
          isClicked={room === 3}
          onClick={() => handleRoomButtonClick(3)}
        />
        <Wall />
      </Row>
      <Row gap="8px">
        <CommunityHall />
        <LongRoom
          isReserved={reservedList.includes(4)}
          isClicked={room === 4}
          onClick={() => handleRoomButtonClick(4)}
        />
      </Row>
    </Column>
  );
};

const CommonRoom = styled.div<{ isClicked?: boolean; isReserved?: boolean }>`
  width: 10vw;
  height: 8vh;
  cursor: pointer;
  ${({ isReserved }) =>
    isReserved
      ? css`
          background-color: ${color.on_tertiary};
          cursor: default;
          &:after {
            content: "예약중";
          }
        `
      : css`
          background-color: ${color.white};
          color: ${color.green};
          &:after {
            content: "예약 가능";
          }
        `}
  ${({ isClicked }) =>
    isClicked &&
    css`
      background-color: ${color.primary_blue};
      color: ${color.white};
      &:after {
        content: "선택중";
      }
    `}
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.05);
  ${flex.CENTER};
  ${font.p3};
`;

const LongRoom = styled(CommonRoom)`
  width: 13.3vw;
  height: 12vw;
`;

const Wall = styled.div`
  width: 10vw;
  height: 8vh;
  background-color: ${color.light_gray};
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.05);
  ${flex.CENTER};
  ${font.p3};
`;

const CommunityHall = styled.div`
  width: 100%;
  height: 12vw;
  background-color: ${color.light_gray};
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.03);
  ${flex.CENTER};
  ${font.H6};

  &:after {
    content: "커뮤니티 홀";
  }
`;

export default ReserveMap;
