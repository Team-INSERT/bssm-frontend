import { Category } from "@/components/atoms";
import { flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import useUser from "@/hooks/useUser";
import { useMeisterRankingQuery } from "../services/query.service";
import RankingListItem from "./RankingListItem";

const Ranking = () => {
  const { user } = useUser();
  const [currentGrade, setCurrentGrade] = React.useState(user.grade);
  const { data, isSuccess, refetch } = useMeisterRankingQuery({
    grade: currentGrade,
  });

  React.useEffect(() => {
    refetch();
  }, [currentGrade, refetch]);

  return (
    <Container>
      <RankingTitle>📊 마이스터역량인증제 순위</RankingTitle>
      <CategoryBox>
        {[1, 2, 3].map((grade) => (
          <Category
            id={`${grade}`}
            name="meisterRanking"
            onChange={(e) => setCurrentGrade(+e.target.id)}
            checked={currentGrade === grade}
            label={`${grade}학년`}
          />
        ))}
      </CategoryBox>
      <RankingList>
        {isSuccess &&
          data.map(
            (rankingItem: {
              score: number;
              positivePoint: number;
              negativePoint: number;
              student: {
                grade: number;
                classNo: number;
                studentNo: number;
                name: string;
              };
            }) => <RankingListItem {...rankingItem} />,
          )}
      </RankingList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${flex.COLUMN};
  gap: 12px;
`;

const CategoryBox = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const RankingTitle = styled.span`
  ${font.H2};
`;

const RankingList = styled.div`
  width: 100%;
  ${flex.COLUMN};
  gap: 12px;
`;

export default Ranking;
