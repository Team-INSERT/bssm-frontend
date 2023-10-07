import { Column, Row } from "@/components/Flex";
import { color, font } from "@/styles";
import flex from "@/styles/flex";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";

import "react-circular-progressbar/dist/styles.css";
import { getMeisterChapter } from "@/helpers";

interface IStatusCard {
  chapter: string;
  score: number;
  maxScore: number;
  statusColor: string;
}

const StatusCard = ({ chapter, score, statusColor, maxScore }: IStatusCard) => {
  return (
    <Container>
      <Row width="100%" alignItems="center" justifyContent="space-between">
        <Column gap="12px" justifyContent="center">
          <ChapterTitle>{getMeisterChapter(chapter)}</ChapterTitle>
          <ScoreBox statusColor={statusColor}>{score}</ScoreBox>
        </Column>
        <CircularProgressBox>
          <CircularProgressbar
            value={(score / maxScore) * 100}
            text={`${Math.round((score / maxScore) * 100)}%`}
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
    content: "점";
  }
`;

const CircularProgressBox = styled.div`
  width: 80px;
`;

export default StatusCard;
