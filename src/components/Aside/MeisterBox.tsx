import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import service from "@/utils/constants/service.constants";
import Row from "../Flex/Row";

const scores = [
  {
    name: "마이스터역량인증제",
    type: service.meister,
  },
  {
    name: "상벌점",
    type: service.reward_points,
  },
];

const MeisterBox = () => {
  return (
    <Container>
      {scores.map(({ name, type }) => (
        <ScoreHGroup key={type}>
          <ScoreName>{name}</ScoreName>
          <Row gap="4px">
            <Score>214.2</Score>
            <Rank>48</Rank>
            {type === service.reward_points && <ScoreGap>43-11</ScoreGap>}
          </Row>
        </ScoreHGroup>
      ))}
    </Container>
  );
};

const Container = styled.section`
  width: 60%;
  height: 140px;
  border-radius: 5px;
  background-color: ${color.white};
  display: flex;
  padding-left: 18px;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

const ScoreHGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
`;

const ScoreName = styled.h1`
  ${font.H6};
  color: ${color.gray};
`;

const Score = styled.h2`
  ${font.H4};

  &:after {
    content: "점";
  }
`;

const Rank = styled.small`
  margin-top: auto;
  color: ${color.gray};
  ${font.p3};

  &:after {
    content: "위";
  }
`;

const ScoreGap = styled(Rank)`
  &:before {
    content: "(";
  }
  &:after {
    content: ")";
  }
`;

export default MeisterBox;
