import React from "react";
import { Row } from "@/components/Flex";
import styled from "styled-components";
import { theme, font } from "@/styles";
import { CommentIcon, LikeIcon, TimeIcon } from "../../assets/icons";
import { usePost } from "../../hooks";
import { PostListItemInformationBarProps } from "../../types/@props";

const PostListItemInformationBar = ({
  likeCount,
  commentCount,
  createdAt,
}: PostListItemInformationBarProps) => {
  const { formatPostCreatedDate } = usePost();
  return (
    <Row gap="12px">
      <InfomationBox>
        <CommentIcon width={12} height={12} />
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
  color: ${theme.gray};
`;

export default PostListItemInformationBar;
