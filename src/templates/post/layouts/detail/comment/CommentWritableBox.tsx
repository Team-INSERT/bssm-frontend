import { Column, Row } from "@/components/Flex";
import { Button } from "@/components/atoms";
import { color } from "@/styles";
import { useComment } from "@/templates/post/hooks";
import { Comment } from "@/templates/post/interfaces";
import dayjs from "dayjs";
import React from "react";
import CommentContentBox from "./CommentContentBox";
import {
  CommentCreatedAt,
  CommentTextArea,
  CommentWriter,
} from "../CommentStylesheet";

const CommentWritableBox = ({ ...comment }: Comment) => {
  const {
    commentInput,
    isEditMode,
    isDetailMode,
    isCommentWriterSameAsUser,
    setCommentInput,
    handleEditModeChange,
    handleDetailModeChange,
    handleCommentInputChange,
    handleUpdateCommentDetailClick,
    handleDeleteCommentDetailClick,
  } = useComment(comment.id);

  React.useEffect(() => {
    setCommentInput(comment.detail);
    // eslint-disable-next-line
  }, []);

  return (
    <Column justifyContent="center" width="100%">
      <Row gap="4px" width="100%">
        <CommentWriter>{comment.user.nickName}</CommentWriter>·
        <CommentCreatedAt>
          {dayjs(comment.createdAt).format("YYYY.MM.DD")}
        </CommentCreatedAt>
        {isCommentWriterSameAsUser(comment.user.id) && (
          <>
            <Button
              align="RIGHT"
              color={isEditMode ? color.primary_red : color.primary_blue}
              onClick={handleEditModeChange}
            >
              {isEditMode ? "취소" : "수정"}
            </Button>
            <Button
              color={isEditMode ? color.primary_blue : color.primary_red}
              onClick={
                isEditMode
                  ? handleUpdateCommentDetailClick
                  : handleDeleteCommentDetailClick
              }
            >
              {isEditMode ? "수정" : "삭제"}
            </Button>
          </>
        )}
      </Row>
      {isEditMode ? (
        <CommentTextArea
          onChange={handleCommentInputChange}
          value={commentInput}
        />
      ) : (
        <CommentContentBox
          isDetailMode={isDetailMode}
          handleDetailModeChange={handleDetailModeChange}
          commentInput={commentInput}
          content={comment.detail}
        />
      )}
    </Column>
  );
};
export default CommentWritableBox;
