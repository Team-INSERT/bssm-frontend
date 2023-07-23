import Row from "@/components/Flex/Row";
import React from "react";
import Like from "@/page/forum-post/assets/Like";
import Comment from "@/page/forum-post/assets/CommentIcon";
import styled from "styled-components";
import { font } from "@/styles/font";

const CountBox = () => {
  return (
    <Row gap="22px">
      <LikeBox>
        <Like width={18} height={18} />
        <LikeText>18</LikeText>
      </LikeBox>
      <Row alignItems="center" gap="4px">
        <Comment width={18} height={18} />
        <CommentText>4</CommentText>
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
