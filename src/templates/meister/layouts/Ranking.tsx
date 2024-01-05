import React from "react";
import styled from "styled-components";
import { Category } from "@/components/atoms";
import { useDidMountEffect } from "@/hooks";
import { flex, font } from "@/styles";
import { useUser } from "@/@user/hooks";
import { useMeisterRankingQuery } from "../services/query.service";
import RankingListItem from "./RankingListItem";
import { MeisterRankingItem } from "../types";

const Ranking = () => {
  const { user } = useUser();
  const [currentGrade, setCurrentGrade] = React.useState(user.grade);
  const { data, isSuccess, refetch } = useMeisterRankingQuery(currentGrade);

  useDidMountEffect(() => {
    refetch();
  }, [currentGrade]);

  return (
    <Container>
      <RankingTitle>📊 마이스터역량인증제 순위</RankingTitle>
      <CategoryBox>
        {[1, 2, 3].map((grade) => (
          <Category
            id={`${grade}`}
            name="meisterRanking"
            onChange={(e) => setCurrentGrade(+e.target.id)}
            selected={currentGrade === grade}
            label={`${grade}학년`}
          />
        ))}
      </CategoryBox>
      <RankingList>
        {isSuccess &&
          data.map((rankingItem: MeisterRankingItem, index: number) => (
            <RankingListItem {...rankingItem} index={index + 1} />
          ))}
      </RankingList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${flex.COLUMN_FLEX};
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
  ${flex.COLUMN_FLEX};
  gap: 12px;
`;

export default Ranking;
