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
      <InformationBox>
        <CommentIcon width={12} height={12} />
        <InformationText>{commentCount}</InformationText>
      </InformationBox>
      <InformationBox>
        <LikeIcon />
        <InformationText>{likeCount}</InformationText>
      </InformationBox>
      <InformationBox>
        <TimeIcon />
        <InformationText>{formatPostCreatedDate(createdAt)}</InformationText>
      </InformationBox>
    </Row>
  );
};

const InformationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  @media screen and (max-width: 340px) {
    display: none;
  }
`;

const InformationText = styled.span`
  ${font.p3};
  color: ${theme.gray};
`;

export default PostListItemInformationBar;
