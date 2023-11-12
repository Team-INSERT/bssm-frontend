import styled from "styled-components";
import { color, font } from "@/styles";
import { Row } from "@/components/Flex";
import useAside from "@/hooks/useAside";

const MeisterBox = () => {
  const { asideInfo } = useAside();
  return (
    <Container>
      <ScoreHGroup>
        <ScoreName>인증제 점수</ScoreName>
        <Row gap="4px">
          <Score>{asideInfo.score}</Score>
          <Rank>{asideInfo.ranking}</Rank>
        </Row>
      </ScoreHGroup>
      <ScoreHGroup>
        <ScoreName>상벌점</ScoreName>
        <Row gap="4px">
          <Score>{asideInfo.positivePoint - asideInfo.negativePoint}</Score>
        </Row>
      </ScoreHGroup>
    </Container>
  );
};

const Container = styled.section`
  width: 60%;
  height: 100%;
  border-radius: 5px;
  background-color: ${color.white};
  display: flex;
  padding: 10px 0 10px 18px;
  flex-direction: column;
  justify-content: center;
  gap: 6px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const ScoreHGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
`;

const ScoreName = styled.h1`
  ${font.p3};
  font-weight: 500;
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

export default MeisterBox;
