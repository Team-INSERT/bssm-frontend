import { theme, flex } from "@/styles";
import React from "react";
import styled from "styled-components";
import Recomment from "@/templates/post/types/Recomment.type";
import { useInfiniteScroll } from "@/hooks";
import { PostDetailParamsProps } from "@/templates/post/types/@props";
import { useRecommentListQuery } from "@/templates/post/services/recomment/query.service";
import RecommentListItem from "./RecommentListItem";

const RecommentList = ({ id }: PostDetailParamsProps) => {
  const { recommentList, fetchNextPage } = useRecommentListQuery(id);
  useInfiniteScroll(fetchNextPage);

  return (
    <Container>
      {recommentList?.map((recomments) => (
        <RecommentListBox key={recomments.currentPage}>
          {recomments.entity.map((recomment: Recomment) => (
            <RecommentListItem key={recomment.id} {...recomment} />
          ))}
        </RecommentListBox>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.white};
`;

const RecommentListBox = styled.div`
  width: 100%;
  height: 100%;
  ${flex.COLUMN_FLEX};
`;

export default RecommentList;
