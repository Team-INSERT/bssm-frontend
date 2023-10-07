import { color, flex } from "@/styles";
import React from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { PuffLoader } from "react-spinners";
import { IComment } from "@/interfaces";
import CommentListItem from "./CommentListItem";
import { useCommentListQuery } from "../../../services/query.service";

interface ICommentListBoxProps {
  postId: string;
}

const CommentList = ({ postId }: ICommentListBoxProps) => {
  const {
    data: commentList,
    fetchNextPage,
    hasNextPage,
  } = useCommentListQuery({ postId });

  return (
    <Container>
      <InfiniteScroll
        dataLength={commentList?.flatMap(({ data }) => data).length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage || false}
        loader={
          <LoadingBox>
            <PuffLoader size={40} />
          </LoadingBox>
        }
      >
        {commentList?.map((comments) => (
          <CommentListBox>
            {comments.entity.map((comment: IComment) => (
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

const LoadingBox = styled.div`
  margin-top: 20px;
  width: 100%;
  ${flex.CENTER};
`;

export default CommentList;
