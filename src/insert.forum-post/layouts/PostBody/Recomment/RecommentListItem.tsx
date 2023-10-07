import { LikeIcon } from "@/_assets/icons";
import { defaultProfile } from "@/_assets/images";
import { Column, Row } from "@/_components/Flex";
import { ImageWithFallback } from "@/_components/atoms";
import useDate from "@/_hooks/useDate";
import useUser from "@/_hooks/useUser";
import { checkTextOverflow, getTextDepth } from "@/_helpers";
import { IRecomment } from "@/_interfaces";
import { color, flex, font } from "@/_styles";
import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Swal from "sweetalert2";
import {
  useDeleteRecommentMutation,
  useUpdateRecommentLikeMutation,
  useUpdateRecommentMutation,
} from "../../../services/mutation.service";

interface ICommentListItemProps {
  recomment: IRecomment;
}

const RecommentListItem = ({ recomment }: ICommentListItemProps) => {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [isDetailMode, setIsDetailMode] = React.useState(false);

  const { user } = useUser();
  const [editDetail, setEditDetail] = React.useState(recomment.detail);
  const [isLiked, setIsLiked] = React.useState(recomment.doesLike);
  const [currentLikeCount, setCurrentLikeCount] = React.useState(
    recomment.likeCount,
  );
  const { formatDate } = useDate();
  const { mutate: updateRecommentMutate } = useUpdateRecommentMutation();
  const { mutate: deleteRecommentMutate } = useDeleteRecommentMutation();
  const { mutate: updateRecommentLikeMutate } =
    useUpdateRecommentLikeMutation();

  const handleChangeEditModeClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleUpdateCommentDetailClick = () => {
    if (!editDetail) return toast.error("내용을 입력해주세요.");
    updateRecommentMutate({
      id: recomment.id,
      detail: editDetail,
    });
    setIsEditMode(false);
  };

  const handleLikeButtonClick = async () => {
    updateRecommentLikeMutate(recomment.id);
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
    if (isConfirmed) deleteRecommentMutate(recomment.id);
  };

  return (
    <Container>
      <ProfileImage>
        <ImageWithFallback
          src={recomment.user.profileImage}
          fallbackSrc={defaultProfile}
          alt="프로필"
          rounded
          width={34}
          height={34}
        />
      </ProfileImage>
      <Column gap="4px" width="100%">
        <Column justifyContent="center" width="100%">
          <Row gap="4px" width="100%">
            <CommentWriter>{recomment.user.nickName}</CommentWriter>
            <CommentSeparator />
            <CommentCreatedAt>
              {formatDate(recomment.createdAt)}
            </CommentCreatedAt>
            {recomment.user.id === user.id && (
              <CommentButtonBox>
                {isEditMode ? (
                  <ButtonBox>
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
                  </ButtonBox>
                ) : (
                  <ButtonBox>
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
                  ? recomment.detail
                  : checkTextOverflow(recomment.detail)}
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
            <LikeIcon isLiked={isLiked} />
            <StyledText>{currentLikeCount}</StyledText>
          </StyledBox>
        </Row>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  padding: 8px 0;
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

  @media screen and (max-width: 541px) {
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

  @media screen and (max-width: 541px) {
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

const ButtonBox = styled.div`
  display: flex;
  gap: 6px;

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export default RecommentListItem;
