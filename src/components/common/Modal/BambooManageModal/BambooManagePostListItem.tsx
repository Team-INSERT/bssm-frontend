import { Row } from "@/components/Flex";
import Button from "@/components/atoms/Button";
import useDate from "@/hooks/useDate";
import IBambooPendingPost from "@/interfaces/bambooPendingPost.interface";
import { useAllowBambooMutation } from "@/page/bamboo/services/mutation.service";
import { color, flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";

interface IBambooManagePostListItemProps {
  bamboo: IBambooPendingPost;
}

const BambooManagePostListItem = ({
  bamboo,
}: IBambooManagePostListItemProps) => {
  const { formatDate } = useDate();
  const { mutate } = useAllowBambooMutation();

  const handleAcceptButtonClick = async () => {
    mutate(bamboo.id);
  };

  return (
    <Container>
      <InfomationBox>
        <PostNumber>{bamboo.id}</PostNumber>
        <PostCreatedDate>{formatDate(bamboo.createdAt)}</PostCreatedDate>
      </InfomationBox>
      <PostContents>{bamboo.content}</PostContents>
      <Row>
        <Button onClick={handleAcceptButtonClick} color={color.primary_blue}>
          승인
        </Button>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 10px 22px;
  background-color: ${color.white};
  ${flex.COLUMN};
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.05);
`;

const InfomationBox = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1.5px solid ${color.on_tertiary};
  display: flex;
  gap: 8px;
`;

const PostNumber = styled.span`
  ${font.H6};

  &:before {
    content: "#부마숲 ";
  }

  &:after {
    content: "번째 이야기";
  }
`;

const PostCreatedDate = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

const PostContents = styled.div`
  width: 100%;
  padding: 10px 0;
  word-break: break-all;
`;

export default BambooManagePostListItem;
