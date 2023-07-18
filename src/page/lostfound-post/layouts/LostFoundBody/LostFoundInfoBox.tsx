import React from "react";
import styled from "styled-components";
import { font } from "@/styles/font";
import Column from "@/components/Flex/Column";

const LostFoundInfoBox = () => {
  return (
    <Column gap="4px">
      {"만약 습득물이라면" && (
        <>
          <LostFoundLocationText>
            <span>체육관</span>
          </LostFoundLocationText>
          <LostFoundSaveLocationText>
            <span>2학년 2반</span>
          </LostFoundSaveLocationText>
        </>
      )}
      {!"만약 분실물이라면" && (
        <LostFoundLostLocationText>글누리</LostFoundLostLocationText>
      )}
    </Column>
  );
};

const LostFoundText = styled.span`
  ${font.p3};
  font-weight: 400;

  span {
    font-weight: 600;
  }
`;

const LostFoundLocationText = styled(LostFoundText)`
  &:before {
    content: "습득장소 | ";
  }
`;

const LostFoundSaveLocationText = styled(LostFoundText)`
  &:before {
    content: "보관장소 | ";
  }
`;

const LostFoundLostLocationText = styled(LostFoundText)`
  &:before {
    content: "분실장소 | ";
  }
`;

export default LostFoundInfoBox;
