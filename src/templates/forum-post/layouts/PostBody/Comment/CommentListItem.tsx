import { AddCommentIcon, Arrow /* LikeIcon */ } from "@/assets/icons";
import { defaultProfile } from "@/assets/images";
import { Column, Row } from "@/components/Flex";
import { ImageWithFallback } from "@/components/atoms";
import useUser from "@/hooks/useUser";
import { checkTextOverflow, getTextDepth } from "@/helpers";
import { IComment } from "@/interfaces";
import { color, flex, font } from "@/styles";
import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Swal from "sweetalert2";
import dayjs from "dayjs";
// import useDate from "@/hooks/useDate";
import {
  useDeletePostCommentMutation,
  useUpdateCommentLikeMutation,
  useUpdatePostCommentMutation,
} from "../../../services/mutation.service";
import CreateRecommentBox from "../Recomment/CreateRecommentBox";
import RecommentList from "../Recomment/RecommentList";

interface ICommentListItemProps {
  comment: IComment;
}

const CommentListItem = ({ comment }: ICommentListItemProps) => {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [isDetailMode, setIsDetailMode] = React.useState(false);
  const [isRecommentMode, setIsRecommentMode] = React.useState(false);
  const [isViewRecommentMode, setIsViewRecommentMode] = React.useState(false);

  const { user } = useUser();
  const [editDetail, setEditDetail] = React.useState(comment.detail);
  const [isLiked, setIsLiked] = React.useState(comment.doesLike);
  const [currentLikeCount, setCurrentLikeCount] = React.useState(
    comment.likeCount,
  );

  const { mutate: updateCommentMutate } = useUpdatePostCommentMutation();
  const { mutate: deleteCommentMutate } = useDeletePostCommentMutation();
  const { mutate: updateCommentLikeMutate } = useUpdateCommentLikeMutation();

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
      <Column gap="4px" width="100%">
        <Column justifyContent="center" width="100%">
          <Row gap="4px" width="100%">
            <CommentWriter>{comment.user.nickName}</CommentWriter>
            <CommentSeparator />
            <CommentCreatedAt>
              {dayjs(comment.createdAt).format("YYYY.MM.DD")}
            </CommentCreatedAt>
            {comment.user.id === user.id && (
              <CommentButtonBox>
                {isEditMode ? (
                  <ButtonBox>
                    <CommentButton
                      color={color.primary_red}
                      onClick={() => setIsEditMode(!isEditMode)}
                    >
                      취소
                    </CommentButton>
                    <CommentButton
                      color={color.primary_blue}
                      onClick={handleUpdateCommentDetailClick}
                    >
                      수정
                    </CommentButton>
                  </ButtonBox>
                ) : (
                  <ButtonBox>
                    <CommentButton
                      color={color.primary_blue}
                      onClick={() => setIsEditMode(!isEditMode)}
                    >
                      수정
                    </CommentButton>
                    <CommentButton
                      color={color.primary_red}
                      onClick={handleDeleteCommentDetailClick}
                    >
                      삭제
                    </CommentButton>
                  </ButtonBox>
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
            <Column gap="4px">
              <CommentDetail>
                {isDetailMode
                  ? comment.detail
                  : checkTextOverflow(comment.detail)}
              </CommentDetail>
              {getTextDepth(editDetail) > 4 && (
                <DetailViewButton
                  onClick={() => setIsDetailMode(!isDetailMode)}
                >
                  {isDetailMode ? "간략히" : "자세히 보기"}
                </DetailViewButton>
              )}
            </Column>
          )}
        </Column>
        <Row gap="6px">
          <StyledBox onClick={handleLikeButtonClick}>
            {/* <LikeIcon isLiked={isLiked} /> */}
            <StyledText>{currentLikeCount}</StyledText>
          </StyledBox>
          <StyledBox onClick={() => setIsRecommentMode(!isRecommentMode)}>
            <AddCommentIcon />
            <StyledCommentText>답글</StyledCommentText>
          </StyledBox>
        </Row>
        {isRecommentMode && (
          <CreateRecommentBox
            id={comment.id}
            handleModeCancelClick={() => setIsRecommentMode(!isRecommentMode)}
          />
        )}
        {!!comment.reCommentCount && (
          <RecommentViewButton
            onClick={() => setIsViewRecommentMode(!isViewRecommentMode)}
          >
            <Arrow
              direction={isViewRecommentMode ? "top" : "bottom"}
              width={12}
              height={12}
              color={color.primary_blue}
            />
            <RecommentViewCountText>
              {comment.reCommentCount}
            </RecommentViewCountText>
          </RecommentViewButton>
        )}
        {isViewRecommentMode && <RecommentList commentId={comment.id} />}
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

  @media screen and (max-width: 470px) {
    display: none;
  }
`;

const CommentDetail = styled.p`
  ${font.p3};
  white-space: pre-wrap;
`;

const CommentSeparator = styled.span`
  &:after {
    content: "·";
  }

  @media screen and (max-width: 470px) {
    display: none;
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

const StyledCommentText = styled(StyledText)`
  @media screen and (max-width: 300px) {
    display: none;
  }
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

const DetailViewButton = styled.button`
  border: none;
  width: fit-content;
  color: ${color.gray};
  ${font.caption};
  border-radius: 999px;

  &:hover {
    text-decoration: underline;
  }
`;

const RecommentViewButton = styled.button`
  width: fit-content;
  ${flex.CENTER};
  gap: 6px;
  margin-top: 6px;
  padding: 8px 10px 4px 10px;
  border-radius: 999px;

  &:hover {
    background-color: ${color.on_tertiary};
  }
`;

const RecommentViewCountText = styled.span`
  color: ${color.primary_blue};
  ${font.caption};
  font-weight: 600;
  margin-top: -4px;

  &:before {
    content: "답글 ";
  }

  &:after {
    content: "개";
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 6px;

  @media screen and (max-width: 320px) {
    display: none;
  }
`;

export default CommentListItem;
