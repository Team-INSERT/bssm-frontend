import { Row } from "@/components/Flex";
import Button from "@/components/atoms/Button";
import { color, flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";

const BambooManagePostListItem = () => {
  const 수락되지않은글이라면 = true;

  return (
    <Container>
      <InfomationBox>
        <PostNumber>21</PostNumber>
        <PostCreatedDate>2023.07.21</PostCreatedDate>
      </InfomationBox>
      <PostContents>{"test ".repeat(40)}</PostContents>
      <Row gap="8px" alignItems="center">
        {수락되지않은글이라면 && (
          <Button color={color.primary_blue}>승인</Button>
        )}
        <Button color={color.primary_red}>삭제</Button>
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
