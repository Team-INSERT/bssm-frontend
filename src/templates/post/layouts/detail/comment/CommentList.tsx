import { color, flex } from "@/styles";
import Loading from "@/components/atoms/Loading";
import React from "react";
import styled from "styled-components";
import { useCommentListQuery } from "@/templates/post/services/comment/query.service";
import { Comment, PostDetailParamsProps } from "@/templates/post/interfaces";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentListItem from "./CommentListItem";

const CommentList = ({ id }: PostDetailParamsProps) => {
  const { commentList, fetchNextPage, hasMore, dataLength } =
    useCommentListQuery(id);

  return (
    <Container>
      <InfiniteScroll
        dataLength={dataLength}
        next={fetchNextPage}
        hasMore={hasMore}
        loader={<Loading />}
      >
        {commentList?.map((comments) => (
          <CommentListBox>
            {comments.entity.map((comment: Comment) => (
              <CommentListItem key={comment.id} comment={comment} />
            ))}
          </CommentListBox>
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

const CommentListBox = styled.div`
  width: 100%;
  height: 100%;
  ${flex.COLUMN};
`;

export default CommentList;
