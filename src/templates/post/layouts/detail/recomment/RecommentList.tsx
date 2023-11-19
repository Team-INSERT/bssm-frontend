import Loading from "@/components/atoms/Loading";
import { color, flex } from "@/styles";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import Recomment from "@/templates/post/interfaces/recomment.interface";
import { PostDetailParamsProps } from "@/templates/post/interfaces";
import { useRecommentListQuery } from "@/templates/post/services/recomment/query.service";
import RecommentListItem from "./RecommentListItem";

const RecommentList = ({ id }: PostDetailParamsProps) => {
  const { recommentList, fetchNextPage, hasMore, dataLength } =
    useRecommentListQuery(id);

  return (
    <Container>
      <InfiniteScroll
        dataLength={dataLength}
        next={fetchNextPage}
        hasMore={hasMore}
        loader={<Loading />}
      >
        {recommentList?.map((recomments) => (
          <RecommentListBox key={recomments.currentPage}>
            {recomments.entity.map((recomment: Recomment) => (
              <RecommentListItem key={recomment.id} {...recomment} />
            ))}
          </RecommentListBox>
        ))}
      </InfiniteScroll>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${color.white};
`;

const RecommentListBox = styled.div`
  width: 100%;
  height: 100%;
  ${flex.COLUMN};
`;

export default RecommentList;
