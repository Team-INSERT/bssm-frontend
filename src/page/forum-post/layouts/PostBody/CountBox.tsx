import React from "react";
import styled from "styled-components";
import { Row } from "@/components/Flex";
import { font } from "@/styles";
import { CommentIcon, Like, LikeIcon } from "@/assets/icons";

interface ICountBoxProps {
  commentCount: number;
  likeCount: number;
}

const CountBox = ({ likeCount, commentCount }: ICountBoxProps) => {
  const [isLiked, setIsLikded] = React.useState(false);
  return (
    <Row gap="22px">
      <LikeBox onClick={() => setIsLikded(!isLiked)}>
        {isLiked ? <LikeIcon width={18} /> : <Like width={18} height={18} />}
        <LikeText>{likeCount}</LikeText>
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
