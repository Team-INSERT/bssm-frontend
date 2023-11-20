import { Column, Row } from "@/components/Flex";
import { styled } from "styled-components";
import { getMeisterChapter } from "@/helpers";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { color, flex, font } from "@/styles";
import { CircularProgressBoxProps } from "../interfaces";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBox = ({
  chapter,
  score,
  statusColor,
  value,
  text,
}: CircularProgressBoxProps) => {
  return (
    <Container>
      <Row width="100%" alignItems="center" justifyContent="space-between">
        <Column gap="12px" justifyContent="center">
          <ChapterTitle>{getMeisterChapter(chapter)}</ChapterTitle>
          <ScoreBox statusColor={statusColor}>{score}</ScoreBox>
        </Column>
        <StyledCircularProgressBox>
          <CircularProgressbar
            value={value}
            text={text}
            styles={buildStyles({
              textSize: "24px",
              pathColor: statusColor,
              textColor: statusColor,
              trailColor: color.on_tertiary,
            })}
          />
        </StyledCircularProgressBox>
      </Row>
    </Container>
  );
};

export default CircularProgressBox;

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
`;

const StyledCircularProgressBox = styled.div`
  width: 80px;
`;
