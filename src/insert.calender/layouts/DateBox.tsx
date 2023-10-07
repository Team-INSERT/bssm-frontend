import styled from "styled-components";
import { Row } from "@/_components/Flex";
import { font } from "@/_styles";

interface IDateBoxProps {
  currentMonth: number;
}

const DateBox = ({ currentMonth }: IDateBoxProps) => {
  return (
    <Row gap="8px">
      <YearText>{new Date().getFullYear()}</YearText>
      <MonthText>{currentMonth}</MonthText>
    </Row>
  );
};

const YearText = styled.h1`
  ${font.H2};

  &:after {
    content: "년";
  }
`;

const MonthText = styled.h1`
  ${font.H2};

  &:after {
    content: "월";
  }
`;

export default DateBox;
