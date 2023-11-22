import { theme, flex } from "@/styles";
import React from "react";
import styled from "styled-components";
import { useInfiniteScroll } from "@/hooks";
import { useCommentListQuery } from "@/templates/post/services/comment/query.service";
import { Comment } from "@/templates/post/types";
import { PostDetailParamsProps } from "@/templates/post/types/@props";
import CommentListItem from "./CommentListItem";

const CommentList = ({ id }: PostDetailParamsProps) => {
  const { commentList, fetchNextPage } = useCommentListQuery(id);
  useInfiniteScroll(fetchNextPage);

  return (
    <Container>
      {commentList?.map((comments) => (
        <CommentListBox>
          {comments.entity.map((comment: Comment) => (
            <CommentListItem key={comment.id} comment={comment} />
          ))}
        </CommentListBox>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.white};
`;

const CommentListBox = styled.div`
  width: 100%;
  height: 100%;
  ${flex.COLUMN_FLEX};
`;

export default CommentList;
