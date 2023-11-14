import { Column } from "@/components/Flex";
import { color, font } from "@/styles";
import React from "react";
import styled from "styled-components";

const MealPageTitleBox = () => {
  return (
    <Column gap="6px">
      <TitleText>🍱 오늘의 급식</TitleText>
      <Description>
        키보드 방향키나 화살표를 클릭해 날짜를 조정해보세요.
      </Description>
    </Column>
  );
};

const TitleText = styled.span`
  ${font.H2};
`;

const Description = styled.span`
  color: ${color.gray};
`;

export default MealPageTitleBox;
