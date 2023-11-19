import React from "react";
import { Row } from "@/components/Flex";
import styled from "styled-components";
import { color, font } from "@/styles";
import { PostListItemInformationBarProps } from "../../interfaces";
import { CommentIcon, LikeIcon, TimeIcon } from "../../assets/icons";
import { usePost } from "../../hooks";

const PostListItemInformationBar = ({
  likeCount,
  commentCount,
  createdAt,
}: PostListItemInformationBarProps) => {
  const { formatPostCreatedDate } = usePost();
  return (
    <Row gap="12px">
      <InfomationBox>
        <CommentIcon />
        <InfomationText>{commentCount}</InfomationText>
      </InfomationBox>
      <InfomationBox>
        <LikeIcon />
        <InfomationText>{likeCount}</InfomationText>
      </InfomationBox>
      <InfomationBox>
        <TimeIcon />
        <InfomationText>{formatPostCreatedDate(createdAt)}</InfomationText>
      </InfomationBox>
    </Row>
  );
};

const InfomationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  @media screen and (max-width: 340px) {
    display: none;
  }
`;

const InfomationText = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

export default PostListItemInformationBar;
