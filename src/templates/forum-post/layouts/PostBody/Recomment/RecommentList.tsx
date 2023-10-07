import { IRecomment } from "@/interfaces";
import { useRecommentListQuery } from "@/templates/forum-post/services/query.service";
import { color, flex } from "@/styles";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { PuffLoader } from "react-spinners";
import styled from "styled-components";
import RecommentListItem from "./RecommentListItem";

interface IRecommentListBoxProps {
  commentId: number;
}

const RecommentList = ({ commentId }: IRecommentListBoxProps) => {
  const {
    data: recommentList,
    fetchNextPage,
    hasNextPage,
  } = useRecommentListQuery({ commentId });

  return (
    <Container>
      <InfiniteScroll
        dataLength={recommentList?.flatMap(({ data }) => data).length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage || false}
        loader={
          <LoadingBox>
            <PuffLoader size={40} />
          </LoadingBox>
        }
      >
        {recommentList?.map((recomments) => (
          <RecommentListBox key={recomments.currentPage}>
            {recomments.entity.map((recomment: IRecomment) => (
              <RecommentListItem key={recomment.id} recomment={recomment} />
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

const LoadingBox = styled.div`
  margin-top: 20px;
  width: 100%;
  ${flex.CENTER};
`;

export default RecommentList;
