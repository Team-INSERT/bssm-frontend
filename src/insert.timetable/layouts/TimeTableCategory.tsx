import styled from "styled-components";
import { Column } from "@/_components/Flex";
import { Category } from "@/_components/atoms";
import { font } from "@/_styles";
import { getTimetableType } from "@/_helpers";

interface ITimeTableCategoryProps {
  weekdays: Array<string>;
  checked: string;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
  timetableType: "bar" | "table";
  setTimetableType: React.Dispatch<React.SetStateAction<"bar" | "table">>;
}

const TimeTableCategory = ({
  weekdays,
  checked,
  setChecked,
  timetableType,
  setTimetableType,
}: ITimeTableCategoryProps) => {
  return (
    <Column gap="16px">
      <Title />
      {timetableType === "bar" && (
        <Column gap="8px">
          <Label>날짜</Label>
          <CategoryBox>
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
          </CategoryBox>
        </Column>
      )}
      <Column gap="8px">
        <Label>시간표 형식</Label>
        <CategoryBox>
          {["bar", "table"].map((type) => (
            <Category
              key={type}
              id={type}
              label={getTimetableType(type)}
              checked={timetableType === type}
              onChange={(e) => setTimetableType(e.target.id as "bar" | "table")}
              name="date"
            />
          ))}
        </CategoryBox>
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

const CategoryBox = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export default TimeTableCategory;
