import { Row } from "@/components/Flex";
import { color } from "@/styles";
import React from "react";
import styled from "styled-components";

const MealListItem = () => {
  return (
    <Container>
      <MealHeader>
        <Row gap="8px" alignItems="center">
          <Red />
          <Yellow />
          <Green />
        </Row>
      </MealHeader>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 68vh;
  border-radius: 12px;
  background-color: ${color.white};
  margin: 10px 0;
`;

const MealHeader = styled.div`
  width: 100%;
  height: 9%;
  padding: 0 16px;
  border-radius: 12px 12px 0 0;
  background-color: ${color.meal_header};
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 25px;
`;

const Red = styled(Circle)`
  background-color: ${color.primary_red};
`;

const Yellow = styled(Circle)`
  background-color: ${color.primary_yellow};
`;

const Green = styled(Circle)`
  background-color: ${color.primary_mint};
`;

export default MealListItem;
