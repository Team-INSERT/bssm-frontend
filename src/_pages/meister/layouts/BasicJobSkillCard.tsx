import { Column, Row } from "@/_components/Flex";
import { color, font } from "@/_styles";
import flex from "@/_styles/flex";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";

import "react-circular-progressbar/dist/styles.css";
import { getMeisterChapter } from "@/_helpers";

interface IStatusCard {
  chapter: string;
  score: number;
  statusColor: string;
}

const rankList = ["A", "B", "C", "D"];

const scoreList = [100, 75, 50, 25];

const BasicJobSkillCard = ({ chapter, score, statusColor }: IStatusCard) => {
  return (
    <Container>
      <Row width="100%" alignItems="center" justifyContent="space-between">
        <Column gap="12px" justifyContent="center">
          <ChapterTitle>{getMeisterChapter(chapter)}</ChapterTitle>
          <ScoreBox statusColor={statusColor}>{score}</ScoreBox>
        </Column>
        <CircularProgressBox>
          <CircularProgressbar
            value={scoreList[score - 1]}
            text={`${rankList[score - 1]}`}
            styles={buildStyles({
              textSize: "24px",
              pathColor: statusColor,
              textColor: statusColor,
              trailColor: color.on_tertiary,
            })}
          />
        </CircularProgressBox>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 120px;
  padding: 16px 30px;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChapterTitle = styled.span`
  ${font.context};
`;

const ScoreBox = styled.div<{ statusColor: string }>`
  ${font.H3};
  height: 36px;
  ${flex.HORIZONTAL}
  padding-left: 10px;
  border-left: ${({ statusColor }) => `4px solid ${statusColor}`};

  &:after {
    content: "등급";
  }
`;

const CircularProgressBox = styled.div`
  width: 80px;
`;

export default BasicJobSkillCard;
