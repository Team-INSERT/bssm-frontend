import { Row } from "@/_components/Flex";
import { Button } from "@/_components/atoms";
import { color, flex, font } from "@/_styles";
import React from "react";
import styled from "styled-components";

interface IConfirmModalProps {
  title?: string;
  content?: string;
  onAgree: () => void;
  onDisAgree: () => void;
}

const ConfirmModal = ({
  title,
  content,
  onAgree,
  onDisAgree,
}: IConfirmModalProps) => {
  return (
    <Container>
      <HGroup>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </HGroup>
      <Row width="100%">
        <Button onClick={onAgree} color={color.primary_blue}>
          확인
        </Button>
        <Button onClick={onDisAgree} color={color.primary_red}>
          취소
        </Button>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  ${flex.COLUMN};
  gap: 24px;
`;

const HGroup = styled.div`
  width: 100%;
  ${flex.COLUMN_CENTER};
  gap: 8px;
`;

const Title = styled.h1`
  ${font.H4};
`;

const Content = styled.p`
  ${font.p3};
`;

export default ConfirmModal;
