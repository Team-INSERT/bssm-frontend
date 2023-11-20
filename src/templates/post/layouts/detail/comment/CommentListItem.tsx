import { defaultProfile } from "@/assets/images";
import { Column } from "@/components/Flex";
import { ImageWithFallback } from "@/components/atoms";
import { flex } from "@/styles";
import { CommentListItemProps } from "@/templates/post/interfaces";
import React from "react";
import styled from "styled-components";
import { useComment } from "@/templates/post/hooks";
import CreateRecommentBox from "../recomment/CreateRecommentBox";
import RecommentList from "../recomment/RecommentList";
import CommentWritableBox from "./CommentWritableBox";
import RecommentViewButton from "./RecommentViewButton";
import CommentLikeInformationBox from "./CommentLikeInformationBox";

const CommentListItem = ({ comment }: CommentListItemProps) => {
  const {
    isRecommentWriteMode,
    isViewRecommentMode,
    handleRecommentWriteModeChange,
    handleViewRecommentModeChange,
  } = useComment(comment.id);

  return (
    <Container>
      <ProfileImage>
        <ImageWithFallback
          src={comment.user.profileImage}
          fallbackSrc={defaultProfile}
          alt="프로필"
          rounded
          width={42}
          height={42}
        />
      </ProfileImage>
      <Column gap="4px" width="100%">
        <CommentWritableBox {...comment} />
        <CommentLikeInformationBox
          comment={comment}
          handleRecommentWriteModeChange={handleRecommentWriteModeChange}
        />
        {isRecommentWriteMode && (
          <CreateRecommentBox
            id={comment.id}
            handleModeCancelClick={handleRecommentWriteModeChange}
          />
        )}
        {!!comment.reCommentCount && (
          <RecommentViewButton
            handleViewRecommentModeChange={handleViewRecommentModeChange}
            isViewRecommentMode={isViewRecommentMode}
            recommentCount={comment.reCommentCount}
          />
        )}
        {isViewRecommentMode && <RecommentList id={comment.id} />}
      </Column>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 10px;
`;

const ProfileImage = styled.div`
  padding: 2px;
  border-radius: 50%;
  width: 44px;
  height: 100%;
  ${flex.CENTER};
`;

export default CommentListItem;
