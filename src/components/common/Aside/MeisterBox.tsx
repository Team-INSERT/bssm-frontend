import styled from "styled-components";
import { color, font } from "@/styles";
import { SERVICE } from "@/constants";
import { Row } from "@/components/Flex";

const scores = [
  {
    name: SERVICE.MEISTER.NAME,
    type: SERVICE.MEISTER.TYPE,
  },
  {
    name: SERVICE.REWARD_POINTS.NAME,
    type: SERVICE.REWARD_POINTS.TYPE,
  },
];

const MeisterBox = () => {
  return (
    <Container>
      {scores.map((score) => (
        <ScoreHGroup key={score.type}>
          <ScoreName>{score.name}</ScoreName>
          <Row gap="4px">
            <Score>{score.name === SERVICE.MEISTER.NAME ? 159.8 : 26}</Score>
            <Rank>{score.name === SERVICE.MEISTER.NAME ? 11 : 4}</Rank>
          </Row>
        </ScoreHGroup>
      ))}
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
