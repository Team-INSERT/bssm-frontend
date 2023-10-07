import { Row } from "@/components/Flex";
import { Button } from "@/components/atoms";
import { isAdmin } from "@/helpers";
import useDate from "@/hooks/useDate";
import useUser from "@/hooks/useUser";
import { IBambooPost } from "@/interfaces";
import { color, flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { useDeleteBambooMutation } from "../services/mutation.service";

interface IBambooPostListItemProps {
  bamboo: IBambooPost;
}

const BambooPostListItem = ({ bamboo }: IBambooPostListItemProps) => {
  const { user } = useUser();
  const { formatDate } = useDate();
  const { mutate } = useDeleteBambooMutation();

  const handleDeleteButtonClick = () => {
    mutate(bamboo.allowedId);
  };

  return (
    <Container>
      <InfomationBox>
        <PostNumber>{bamboo.allowedId}</PostNumber>
        <PostCreatedDate>{formatDate(bamboo.createdAt)}</PostCreatedDate>
        <ResponsivePostCreatedDate>
          {formatDate(bamboo.createdAt, { summary: true })}
        </ResponsivePostCreatedDate>
      </InfomationBox>
      <PostContents>{bamboo.content}</PostContents>
      {isAdmin(user.authority) && (
        <Row>
          <Button onClick={handleDeleteButtonClick} color={color.primary_red}>
            삭제
          </Button>
        </Row>
      )}
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

  @media screen and (max-width: 541px) {
    display: none;
  }
`;

const ResponsivePostCreatedDate = styled(PostCreatedDate)`
  display: none;
  @media screen and (max-width: 541px) {
    display: block;
  }
`;

const PostContents = styled.div`
  width: 100%;
  padding: 10px 0;
  word-break: break-all;
`;

export default BambooPostListItem;
