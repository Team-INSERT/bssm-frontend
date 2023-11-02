import { color, flex, font } from "@/styles";
import { MealIcon } from "@/assets/icons";
import React from "react";
import styled from "styled-components";
import HomeHead from "./HomeHead";

interface IHomeMealProps {
  content: string;
  cal: string;
  name: string;
}

const HomeMeal = ({ content, cal, name }: IHomeMealProps) => {
  return (
    <Container>
      <HomeHead icon={<MealIcon />} title="오늘의 급식" href="/meal" />
      <MealBody>
        <MealContent dangerouslySetInnerHTML={{ __html: content }} />
        <MealCalorie>
          {name}, {cal}
        </MealCalorie>
      </MealBody>
    </Container>
  );
};

const Container = styled.div`
  width: 46%;
  height: 30vh;
  border-radius: 4px;
  background-color: ${color.white};
  ${flex.COLUMN};
`;

const MealBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px 24px;
  display: flex;
`;

const MealContent = styled.p`
  ${font.p3};
  white-space: pre;
  font-size: 12px;
  line-height: 180%;
`;

const MealCalorie = styled.span`
  ${font.caption};
  color: ${color.gray};
  margin-left: auto;

  &:after {
    content: "kcal";
  }
`;

export default HomeMeal;
