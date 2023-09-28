import { AddCommentIcon, LikeIcon } from "@/assets/icons";
import { defaultProfile } from "@/assets/images";
import { Column, Row } from "@/components/Flex";
import { ImageWithFallback } from "@/components/atoms";
import useDate from "@/hooks/useDate";
import useUser from "@/hooks/useUser";
import { IComment } from "@/interfaces";
import { color, flex, font } from "@/styles";
import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Swal from "sweetalert2";
import {
  useDeletePostCommentMutation,
  useUpdateCommentLikeMutation,
  useUpdatePostCommentMutation,
} from "../../services/mutation.service";

interface ICommentListItemProps {
  comment: IComment;
}

const CommentListItem = ({ comment }: ICommentListItemProps) => {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const { user } = useUser();
  const [editDetail, setEditDetail] = React.useState(comment.detail);
  const [isLiked, setIsLiked] = React.useState(comment.doesLike);
  const [currentLikeCount, setCurrentLikeCount] = React.useState(
    comment.likeCount,
  );
  const { formatDate } = useDate();
  const { mutate: updateCommentMutate } = useUpdatePostCommentMutation();
  const { mutate: deleteCommentMutate } = useDeletePostCommentMutation();
  const { mutate: updateCommentLikeMutate } = useUpdateCommentLikeMutation();

  const handleChangeEditModeClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleUpdateCommentDetailClick = () => {
    if (!editDetail) return toast.error("내용을 입력해주세요.");
    updateCommentMutate({
      id: comment.id,
      detail: editDetail,
    });
    setIsEditMode(false);
  };

  const handleLikeButtonClick = async () => {
    updateCommentLikeMutate(comment.id);
    setIsLiked(!isLiked);
    setCurrentLikeCount(isLiked ? currentLikeCount - 1 : currentLikeCount + 1);
  };

  const handleDeleteCommentDetailClick = async () => {
    const { isConfirmed } = await Swal.fire({
      title: "게시글 삭제",
      text: "해당 게시글을 삭제할까요?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    });
    if (isConfirmed) deleteCommentMutate(comment.id);
  };

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
      <Column gap="6px" width="100%">
        <Column justifyContent="center" width="100%">
          <Row gap="4px" width="100%">
            <CommentWriter>{comment.user.nickName}</CommentWriter>
            <CommentSeparator />
            <CommentCreatedAt>{formatDate(comment.createdAt)}</CommentCreatedAt>
            {comment.user.id === user.id && (
              <CommentButtonBox>
                {isEditMode ? (
                  <>
                    <CommentButton
                      color={color.primary_red}
                      onClick={handleChangeEditModeClick}
                    >
                      취소
                    </CommentButton>
                    <CommentButton
                      color={color.primary_blue}
                      onClick={handleUpdateCommentDetailClick}
                    >
                      수정
                    </CommentButton>
                  </>
                ) : (
                  <>
                    <CommentButton
                      color={color.primary_blue}
                      onClick={handleChangeEditModeClick}
                    >
                      수정
                    </CommentButton>
                    <CommentButton
                      color={color.primary_red}
                      onClick={handleDeleteCommentDetailClick}
                    >
                      삭제
                    </CommentButton>
                  </>
                )}
              </CommentButtonBox>
            )}
          </Row>
          {isEditMode ? (
            <CommentTextArea
              onChange={(e) => setEditDetail(e.target.value)}
              value={editDetail}
            />
          ) : (
            <CommentDetail>{comment.detail}</CommentDetail>
          )}
        </Column>
        <Row gap="6px">
          <StyledBox onClick={handleLikeButtonClick}>
            <LikeIcon isLiked={isLiked} />
            <StyledText>{currentLikeCount}</StyledText>
          </StyledBox>
          <StyledBox>
            <AddCommentIcon />
            <StyledText>답글</StyledText>
          </StyledBox>
        </Row>
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

const CommentWriter = styled.span`
  ${font.caption};
  font-weight: 600;
  color: ${color.gray};
`;

const CommentCreatedAt = styled.span`
  ${font.caption};
  color: ${color.gray};
`;

const CommentDetail = styled.p`
  ${font.p3};
`;

const CommentSeparator = styled.span`
  &:after {
    content: "·";
  }
`;

const StyledBox = styled.div`
  ${flex.HORIZONTAL};
  gap: 4px;
  cursor: pointer;
  padding: 2px 6px;

  &:hover {
    background-color: ${color.on_tertiary};
    border-radius: 999px;
  }
`;

const StyledText = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

const CommentButtonBox = styled.div`
  display: flex;
  margin-left: auto;
  gap: 6px;
`;

const CommentButton = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  ${font.caption};
  color: ${color.white};
  padding: 2px 10px;
  border-radius: 4px;
`;

const CommentTextArea = styled.textarea`
  border: 2px solid ${color.on_tertiary};
  border-radius: 4px;
  padding: 6px 12px;
  margin: 6px 0;
  ${font.p3};
`;

export default CommentListItem;
