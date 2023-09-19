import React from "react";
import styled from "styled-components";
import { Row } from "@/components/Flex";
import { color, font } from "@/styles";
import { CommentIcon, LikeIcon } from "@/assets/icons";
import httpClient from "@/apis/httpClient";
import { LIKE } from "@/constants";

interface ICountBoxProps {
  commentCount: number;
  likeCount: number;
  isMyLike: boolean;
  id: number;
}

const CountBox = ({
  likeCount,
  commentCount,
  isMyLike,
  id,
}: ICountBoxProps) => {
  const [isLiked, setIsLiked] = React.useState(isMyLike);

  const handleLikeButtonClick = async () => {
    const { data: like } = await httpClient.like.put({
      type: LIKE.POST,
      partyId: id,
    });
    setIsLiked(like);
  };

  return (
    <Row gap="22px">
      <LikeBox onClick={handleLikeButtonClick}>
        <LikeIcon
          width={18}
          color={isLiked ? color.primary_red : color.black}
        />
        <LikeText>{likeCount + Number(isLiked)}</LikeText>
      </LikeBox>
      <Row alignItems="center" gap="4px">
        <CommentIcon width={18} height={18} />
        <CommentText>{commentCount}</CommentText>
      </Row>
    </Row>
  );
};

const LikeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const LikeText = styled.span`
  ${font.p1};
`;

const CommentText = styled.span`
  ${font.p1};
`;

export default CountBox;
