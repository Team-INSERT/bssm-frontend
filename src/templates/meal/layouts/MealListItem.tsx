import styled from "styled-components";
import { theme, flex, font } from "@/styles";
import { Row } from "@/components/Flex";
import BlinkerBox from "./BlinkerBox";
import { useMeal } from "../hooks";
import { MealListItemProps } from "../types/@props";

const MealListItem = ({ mealName, meal }: MealListItemProps) => {
  const { get식사명ByMealName, replaceBrToLine } = useMeal();
  return (
    <Layout>
      <MealHeaderBox>
        <BlinkerBox />
        <Row gap="4px">
          <MealTimeText>{get식사명ByMealName(mealName)}</MealTimeText>
          <MealCalText>{meal.cal}kcal</MealCalText>
        </Row>
      </MealHeaderBox>
      <MealContentText>{replaceBrToLine(meal.content)}</MealContentText>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: ${theme.white};
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.15);
  margin: 16px 0;
  transition: ease-in-out;
  transition-duration: 0.2s;
  white-space: pre-wrap;
  cursor: pointer;

  &:hover {
    width: 104%;
    height: 104%;
    transition: ease-in-out;
    transition-duration: 0.2s;
  }

  @media screen and (max-width: 768px) {
    width: 70vw;

    &:hover {
      width: 72vw;
    }
  }
`;

const MealHeaderBox = styled.div`
  width: 100%;
  height: 32px;
  padding: 0 16px;
  border-radius: 12px 12px 0 0;
  background-color: ${theme.meal_header};
  ${flex.CENTER};
  justify-content: space-between;
  position: relative;
`;

const MealTimeText = styled.span`
  ${font.p3};
`;

const MealCalText = styled(MealTimeText)`
  &:before {
    content: "· ";
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MealContentText = styled.p`
  width: 100%;
  height: 100%;
  ${flex.HORIZONTAL};
  ${font.p1};
  line-height: 180%;
  font-weight: 500;
  white-space: pre;
  padding: 20px 0;
`;

export default MealListItem;
