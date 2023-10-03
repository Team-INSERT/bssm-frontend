import styled from "styled-components";
import { Column, Row } from "@/components/Flex";
import { Category, Select } from "@/components/atoms";
import { IClassLevel } from "@/interfaces";
import { font } from "@/styles";

interface ITimeTableCategoryProps {
  weekdays: Array<string>;
  checked: string;
  classLevel: IClassLevel;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
  setClassLevel: React.Dispatch<React.SetStateAction<IClassLevel>>;
}

const TimeTableCategory = ({
  weekdays,
  checked,
  setChecked,
  classLevel,
  setClassLevel,
}: ITimeTableCategoryProps) => {
  return (
    <Column gap="16px">
      <Title />
      <Column gap="8px">
        <Label>날짜</Label>
        <WeekDayBox>
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
        </WeekDayBox>
      </Column>
      <Column gap="8px">
        <Label>학급</Label>
        <Row gap="6px">
          <Select
            options={["1", "2", "3"]}
            defaultOption={classLevel.grade}
            label="학년"
            handler={(grade: string) => setClassLevel({ ...classLevel, grade })}
          />
          <Select
            options={["1", "2", "3", "4"]}
            defaultOption={classLevel.class}
            label="반"
            width="62px"
            handler={(cls: string) =>
              setClassLevel({ ...classLevel, class: cls })
            }
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

const WeekDayBox = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export default TimeTableCategory;
