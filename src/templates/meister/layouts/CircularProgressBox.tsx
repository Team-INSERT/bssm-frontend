import "react-circular-progressbar/dist/styles.css";
import { styled } from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Column, Row } from "@/components/Flex";
import { theme, flex, font } from "@/styles";
import { CircularProgressBoxProps } from "../types/@props";
import { getMeisterChapter } from "../helpers";

const CircularProgressbarComponent =
  // eslint-disable-next-line
  CircularProgressbar as unknown as React.FC<any>;

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
          <CircularProgressbarComponent
            value={value}
            text={text}
            styles={buildStyles({
              textSize: "24px",
              pathColor: statusColor,
              textColor: statusColor,
              trailColor: theme.on_tertiary,
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
  background-color: ${theme.white};
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
