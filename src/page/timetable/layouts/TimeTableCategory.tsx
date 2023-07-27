import Column from "@/components/Flex/Column";
import Row from "@/components/Flex/Row";
import Category from "@/components/atoms/Category";
import Select from "@/components/atoms/Select";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";

interface ITimeTableCategoryProps {
  weekdays: Array<string>;
  checked: string;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
  userGrade: string;
  setUserGrade: React.Dispatch<React.SetStateAction<string>>;
  userClass: string;
  setUserClass: React.Dispatch<React.SetStateAction<string>>;
}

const TimeTableCategory = ({
  weekdays,
  checked,
  setChecked,
  userGrade,
  setUserGrade,
  userClass,
  setUserClass,
}: ITimeTableCategoryProps) => {
  return (
    <Column gap="16px">
      <Title />
      <Column gap="8px">
        <Label>날짜</Label>
        <Row gap="8px">
          {weekdays.map((weekday) => (
            <Category
              key={weekday}
              id={weekday}
              label={`${weekday}요일`}
              checked={weekday === checked}
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
            defaultOption={userGrade}
            label="학년"
            handler={setUserGrade}
          />
          <Select
            options={["1", "2", "3", "4"]}
            defaultOption={userClass}
            label="반"
            width="62px"
            handler={setUserClass}
          />
        </Row>
      </Column>
    </Column>
  );
};

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

export default TimeTableCategory;
