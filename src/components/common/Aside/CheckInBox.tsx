import styled from "styled-components";
import { theme, font, flex } from "@/styles";
import { useAside } from "./hooks";

const CheckInBox = () => {
  const { aside, handlePopupOpenClick } = useAside();

  return (
    <Container>
      {aside.room && (
        <HGroup>
          <Date>
            {`${aside.room.yearSemester.year}`.substring(2, 4)}년
            {aside.room.yearSemester.semester}학기
          </Date>
          <RoomNumber>
            {aside.room.dormitoryType}동 {aside.room.roomNumber}호
          </RoomNumber>
        </HGroup>
      )}
      <CheckButton
        onClick={handlePopupOpenClick}
        disabled={aside.room && aside.isCheckedIn}
      >
        {aside.room && aside.isCheckedIn ? "입사 완료" : "입사 체크"}
      </CheckButton>
    </Container>
  );
};

const Container = styled.section`
  ${flex.COLUMN_BETWEEN};
  width: 40%;
  height: 100%;
  border-radius: 5px;
  background-color: ${theme.white};
  display: flex;
  padding: 22px 0;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const HGroup = styled.hgroup`
  ${flex.COLUMN_FLEX};
  margin-right: auto;
  padding-left: 18px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Date = styled.span`
  ${font.H6};
  color: ${theme.gray};
`;

const RoomNumber = styled.span`
  ${font.H5};
`;

const CheckButton = styled.button`
  width: 78%;
  height: 32px;
  background-color: ${theme.primary_blue};
  border-radius: 3px;
  color: ${theme.white};
  ${font.btn3};

  &:disabled {
    background-color: ${theme.content};
  }
`;

export default CheckInBox;
