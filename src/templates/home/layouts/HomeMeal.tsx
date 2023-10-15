import { color, flex, font } from "@/styles";
import { MealIcon } from "@/assets/icons";
import React from "react";
import styled from "styled-components";
import HomeHead from "./HomeHead";

const HomeMeal = () => {
  return (
    <Container>
      <HomeHead icon={<MealIcon />} title="오늘의 급식" href="/meal" />
      <MealBody>
        <MealContent>
          asdmlkasnl
          <br />
          asdmlkasnl
          <br />
          asdmlkasnl
          <br />
          asdmlkasnl
        </MealContent>
        <MealCalorie>852.1</MealCalorie>
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
  line-height: 160%;
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
