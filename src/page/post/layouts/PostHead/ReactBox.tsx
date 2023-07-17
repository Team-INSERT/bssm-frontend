import Row from "@/components/Flex/Row";
import color from "@/styles/color";
import { font } from "@/styles/font";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import View from "@/page/post/assets/View.svg";
import Like from "@/page/post/assets/Like.svg";
import Comment from "@/page/post/assets/comment.svg";

const ReactBox = () => {
  return (
    <Container>
      <Row alignItems="center" gap="4px">
        <Image src={View} alt="view" width={14} height={14} />
        <ViewText>122</ViewText>
      </Row>
      <Row alignItems="center" gap="4px">
        <Image src={Like} alt="like" width={14} height={14} />
        <LikeText>8</LikeText>
      </Row>
      <Row alignItems="center" gap="4px">
        <Image src={Comment} alt="comment" width={14} height={14} />
        <CommentText>3</CommentText>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 18px;
  align-items: center;
  border-bottom: 1.5px solid ${color.on_tertiary};
  padding: 0 0 10px 4px;
`;

const ViewText = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

const LikeText = styled(ViewText)``;

const CommentText = styled(ViewText)``;

export default ReactBox;
