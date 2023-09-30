import React from "react";
import styled from "styled-components";
import { color, flex, font } from "@/styles";
import { Row } from "@/components/Flex";
import { getMealName } from "@/helpers";
import BlinkerBox from "./BlinkerBox";

interface IMealListItemProps {
  mealName: string;
  meal: {
    content: string;
    cal: number;
  };
}

const MealListItem = ({ mealName, meal }: IMealListItemProps) => {
  return (
    <Container>
      <MealHeader>
        <BlinkerBox />
        <Row gap="4px">
          <MealTime>{getMealName(mealName)}</MealTime>
          <MealCal>{meal?.cal}</MealCal>
        </Row>
      </MealHeader>
      <MealBody>
        <MealContent>{meal?.content}</MealContent>
      </MealBody>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 56vh;
  border-radius: 12px;
  background-color: ${color.white};
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.15);
  margin: 16px 0;
  transition: ease-in-out;
  transition-duration: 0.2s;

  &:hover {
    width: 110%;
    height: 58vh;
    transition: ease-in-out;
    transition-duration: 0.2s;
  }
`;

const MealHeader = styled.div`
  width: 100%;
  height: 32px;
  padding: 0 16px;
  border-radius: 12px 12px 0 0;
  background-color: ${color.meal_header};
  ${flex.CENTER}
  position: relative;
`;

const MealTime = styled.span`
  ${font.p3};
`;

const MealCal = styled(MealTime)`
  &:before {
    content: "· ";
  }

  &:after {
    content: "kcal";
  }
`;

const MealBody = styled.div`
  width: 100%;
  height: 100%;
  ${flex.CENTER};
`;

const MealContent = styled.p`
  ${font.p1};
  line-height: 180%;
  font-weight: 500;
  white-space: pre;
  margin: 14px 0 auto 0;
`;

export default MealListItem;
