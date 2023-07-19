import Category from "@/components/atoms/Category";
import Select from "@/components/atoms/Select";
import Column from "@/components/Flex/Column";
import Row from "@/components/Flex/Row";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import TimeTableBar from "./TimeTableBar";

const weeks = ["월", "화", "수", "목", "금", "토", "일"];

const TimteTableBox = () => {
  const [checked, setChecked] = React.useState("수");
  const [grade, setGrade] = React.useState("2");
  const [userClass, setUserClass] = React.useState("2");

  return (
    <Container>
      <Column gap="16px">
        <Title />
        <Column gap="8px">
          <Label>날짜</Label>
          <Row gap="8px">
            {Array.from({ length: 7 }).map((_, index) => (
              <Category
                key={index}
                id={weeks[index]}
                label={`${weeks[index]}요일`}
                checked={weeks[index] === checked}
                onChange={(e) => setChecked(e.target.id)}
                name="date"
              />
            ))}
          </Row>
        </Column>
        <Column gap="8px">
          <Label>학급</Label>
          <Row gap="6px">
            <Select
              options={["1", "2", "3"]}
              defaultOption={grade}
              label="학년"
              handler={setGrade}
            />
            <Select
              options={["1", "2", "3", "4"]}
              defaultOption={userClass}
              label="반"
              size="62px"
              handler={setUserClass}
            />
          </Row>
        </Column>
      </Column>
      <TimeTableBar />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8vh;
`;

const Title = styled.div`
  ${font.H2};

  &:after {
    content: "시간표";
  }
`;

const Label = styled.span`
  ${font.context};
  padding-left: 4px;
`;

export default TimteTableBox;
