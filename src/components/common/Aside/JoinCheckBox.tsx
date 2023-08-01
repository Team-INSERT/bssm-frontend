import styled from "styled-components";
import { color, font } from "@/styles";

const JoinCheckBox = () => {
  return (
    <Container>
      <HGroup>
        <Date>7월 1주차</Date>
        <RoomNumber>334</RoomNumber>
      </HGroup>
      <CheckButton disabled />
    </Container>
  );
};

const Container = styled.section`
  width: 40%;
  height: 140px;
  border-radius: 5px;
  background-color: ${color.white};
  display: flex;
  padding: 18px 0;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const HGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  padding-left: 18px;
`;

const Date = styled.span`
  ${font.H6};
  color: ${color.gray};
`;

const RoomNumber = styled.span`
  ${font.H4};

  &:after {
    content: "호";
  }
`;

const CheckButton = styled.button`
  width: 78%;
  height: 32px;
  background-color: ${color.primary_blue};
  border-radius: 3px;
  color: ${color.white};
  ${font.btn3};

  &:after {
    content: "입사 체크하기";
  }

  &:disabled {
    background-color: ${color.content};

    &:after {
      content: "입사 체크완료";
    }
  }
`;

export default JoinCheckBox;
