import styled from "styled-components";
import { Column, Row } from "@/components/Flex";
import { theme, flex, font } from "@/styles";
import { BerReserveMapProps } from "../types/@props";
import { getIfReservedRoomCSS, getIfSelectedRoomCSS } from "../helpers";

const ReserveMap = ({
  currentRoom,
  reservedList,
  handleClick,
}: BerReserveMapProps) => {
  return (
    <Container>
      <Column gap="8px" width="100%">
        <Row gap="8px" width="100%" justifyContent="space-between">
          {[1, 2, 3].map((roomNumber) => {
            return (
              <CommonRoom
                key={roomNumber}
                isReserved={reservedList.includes(roomNumber)}
                isClicked={currentRoom === roomNumber}
                onClick={() => handleClick(roomNumber)}
              />
            );
          })}
        </Row>
        <CommunityHall>커뮤니티 홀</CommunityHall>
      </Column>
      <Column gap="8px" width="30%">
        <Wall />
        <LongRoom
          isReserved={reservedList.includes(4)}
          isClicked={currentRoom === 4}
          onClick={() => handleClick(4)}
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
  ${flex.CENTER};
  ${font.p3};
  width: 100%;
  height: 8vh;
  cursor: pointer;
  background-color: ${theme.white};
  color: ${theme.green};
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.05);

  ${({ isReserved }) => getIfReservedRoomCSS(isReserved)};
  ${({ isClicked }) => getIfSelectedRoomCSS(isClicked)}
`;

const LongRoom = styled(CommonRoom)`
  width: 100%;
  height: 12vw;
`;

const Wall = styled.div`
  width: 100%;
  height: 8vh;
  background-color: ${theme.light_gray};
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.05);
  ${flex.CENTER};
  ${font.p3};
`;

const CommunityHall = styled.div`
  width: 100%;
  height: 12vw;
  background-color: ${theme.light_gray};
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.03);
  ${flex.CENTER};
  ${font.H6};
`;

export default ReserveMap;
