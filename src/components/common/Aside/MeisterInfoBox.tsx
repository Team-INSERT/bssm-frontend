import styled from "styled-components";
import { theme, font, flex } from "@/styles";
import { Row } from "@/components/Flex";
import { useAside } from "./hooks";

const MeisterInfoBox = () => {
  const { aside } = useAside();
  return (
    <Container>
      <ScoreHGroup>
        <ScoreName>인증제 점수</ScoreName>
        <Row gap="4px">
          <Score>{aside.score}점</Score>
          <Rank>{aside.ranking}위</Rank>
        </Row>
      </ScoreHGroup>
      <ScoreHGroup>
        <ScoreName>상벌점</ScoreName>
        <Row gap="4px">
          <Score>{aside.positivePoint - aside.negativePoint}점</Score>
        </Row>
      </ScoreHGroup>
    </Container>
  );
};

const Container = styled.section`
  ${flex.COLUMN_HORIZONTAL};
  width: 60%;
  height: 100%;
  border-radius: 5px;
  background-color: ${theme.white};
  padding: 10px 0 10px 18px;
  gap: 6px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const ScoreHGroup = styled.hgroup`
  ${flex.COLUMN_FLEX};
`;

const ScoreName = styled.h1`
  ${font.p3};
  font-weight: 500;
  color: ${theme.gray};
`;

const Score = styled.h2`
  ${font.H4};
`;

const Rank = styled.small`
  margin-top: auto;
  color: ${theme.gray};
  ${font.p3};
`;

export default MeisterInfoBox;
