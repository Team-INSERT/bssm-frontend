import React from "react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import styled, { css } from "styled-components";
import { Column, Row } from "@/components/Flex";
import { theme, flex, font } from "@/styles";

interface IReserveMapProps {
  reservedList: Array<number>;
}

const HomeReserveMap = ({ reservedList }: IReserveMapProps) => {
  const [room, setRoom] = React.useState(0);
  const [date, setDate] = React.useState(dayjs().format("YYYY-MM-DD"));
  const router = useRouter();

  const handleRoomButtonClick = (roomNumber: number) => {
    if (reservedList.includes(roomNumber)) return;
    setRoom(roomNumber);
  };

  const handleReserveButtonClick = () => {
    router.push(`/ber?date=${date}`);
  };

  return (
    <Container>
      <Column gap="8px" width="100%">
        <Row gap="8px" width="100%">
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
        </Row>
        <InputContainer>
          <Row gap="12px" justifyContent="space-between" alignItems="center">
            <StyledInputWrap>
              <StyledTitle>선택된 베르실</StyledTitle>
              <StyledInput
                value={room ? `베르 ${room}실` : "선택하세요"}
                readOnly
              />
            </StyledInputWrap>
            <StyledInputWrap>
              <StyledTitle>선택된 날짜</StyledTitle>
              <StyledInput
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </StyledInputWrap>
            <StyledButton onClick={handleReserveButtonClick} disabled={!room} />
          </Row>
        </InputContainer>
      </Column>
      <Column gap="8px" width="30%">
        <LongRoom
          isReserved={reservedList.includes(4)}
          isClicked={room === 4}
          onClick={() => handleRoomButtonClick(4)}
        />
      </Column>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  gap: 8px;
`;

const CommonRoom = styled.div<{ isClicked?: boolean; isReserved?: boolean }>`
  width: 100%;
  height: 6vh;
  cursor: pointer;
  ${({ isReserved }) =>
    isReserved
      ? css`
          background-color: ${theme.on_tertiary};
          cursor: default;
          &:after {
            content: "예약중";
          }
        `
      : css`
          background-color: ${theme.white};
          color: ${theme.green};
          &:after {
            content: "예약 가능";
          }
        `}
  ${({ isClicked }) =>
    isClicked &&
    css`
      background-color: ${theme.primary_blue};
      color: ${theme.white};
      &:after {
        content: "선택중";
      }
    `}
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.03);
  ${flex.CENTER};
  ${font.p3};
`;

const LongRoom = styled(CommonRoom)`
  width: 7vw;
  height: 20vh;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 13vh;
  background-color: ${theme.white};
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.05);
  padding: 14px;
  display: ${flex.CENTER};
  gap: 8px;
`;

const StyledInputWrap = styled.div`
  ${flex.COLUMN_FLEX};
  gap: 6px;
  margin-top: auto;
`;

const StyledTitle = styled.div`
  ${font.caption};
`;

const StyledInput = styled.input`
  width: 120px;
  padding: 6px 10px;
  height: 30px;
  background-color: ${theme.white};
  ${font.caption};
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.05);
`;

const StyledButton = styled.button`
  margin-top: auto;
  border: none;
  background-color: ${theme.primary_blue};
  padding: 6px 14px;
  border-radius: 4px;
  width: fit-content;
  height: fit-content;
  ${font.caption};
  color: ${theme.white};
  &:after {
    content: "예약하기";
  }

  @media screen and (max-width: 1200px) {
    &:after {
      content: "예약";
    }
  }

  &:disabled {
    background-color: ${theme.on_tertiary};
  }
`;

export default HomeReserveMap;
