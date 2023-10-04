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
  height: 100%;
  border-radius: 5px;
  background-color: ${color.white};
  display: flex;
  padding: 18px 0;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const HGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  padding-left: 18px;

  @media screen and (max-width: 900px) {
    display: none;
  }
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
    content: "입사 체크";
  }

  &:disabled {
    background-color: ${color.content};

    &:after {
      content: "미완성 기능";
    }
  }
`;

export default JoinCheckBox;
