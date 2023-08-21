import { color, flex, font } from "@/styles";
import useUser from "@/hooks/useUser";
import { Row } from "@/components/Flex";
import { BambooManageModal } from "@/components/common";
import useModal from "@/hooks/useModal";
import React from "react";
import styled from "styled-components";
import BambooPostListItem from "./BambooPostListItem";

const BambooPostList = () => {
  const { isLogined } = useUser();
  const { openModal } = useModal();

  const handleManageButtonClick = () => {
    openModal({
      component: <BambooManageModal />,
    });
  };

  return (
    <Container>
      <Title />
      <SubTitle />
      <Row width="100%" alignItems="center" gap="8px">
        <StyledButton>제보하기</StyledButton>
        {isLogined && (
          <StyledButton onClick={handleManageButtonClick}>
            글 관리하기
          </StyledButton>
        )}
      </Row>
      <BambooPostListBox>
        {Array.from({ length: 10 }).map((_, i) => (
          <BambooPostListItem key={i} />
        ))}
      </BambooPostListBox>
    </Container>
  );
};

const Container = styled.div`
  width: 67%;
  ${flex.COLUMN};
  gap: 14px;
`;

const Title = styled.h1`
  ${font.H2};

  &:after {
    content: "🎋 학생 대나무숲";
  }
`;

const SubTitle = styled.span`
  ${font.context};
  color: ${color.gray};

  &:after {
    content: "말 못할 고민이나 사연들을 익명으로 편하게 이야기해봐요.";
  }
`;

const StyledButton = styled.button`
  background-color: ${color.primary_blue};
  border-radius: 4px;
  padding: 6px 10px;
  color: ${color.white};
`;

const BambooPostListBox = styled.div`
  ${flex.COLUMN};
  gap: 14px;
`;

export default BambooPostList;
