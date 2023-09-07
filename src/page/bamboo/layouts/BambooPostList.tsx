import { color, flex, font } from "@/styles";
import useUser from "@/hooks/useUser";
import { Row } from "@/components/Flex";
import { BambooManageModal } from "@/components/common";
import useModal from "@/hooks/useModal";
import { isAdmin } from "@/helpers";
import BambooCreateModal from "@/components/common/Modal/BambooCreateModal";
import React from "react";
import styled from "styled-components";
import BambooPostListItem from "./BambooPostListItem";
import { useBambooListQuery } from "../services/query.service";

const BambooPostList = () => {
  const { user } = useUser();
  const { openModal } = useModal();
  const { bamboos, isSuccess } = useBambooListQuery();

  const handleManageButtonClick = () => {
    openModal({
      component: <BambooManageModal />,
    });
  };

  const handleCreateButtonClick = () => {
    openModal({
      component: <BambooCreateModal />,
    });
  };

  return (
    <Container>
      <Title />
      <SubTitle />
      <Row width="100%" alignItems="center" gap="8px">
        <StyledButton onClick={handleCreateButtonClick}>제보하기</StyledButton>
        {isAdmin(user.authority) && (
          <StyledButton onClick={handleManageButtonClick}>
            글 관리하기
          </StyledButton>
        )}
      </Row>
      <BambooPostListBox>
        {isSuccess &&
          bamboos?.map((bamboo) => (
            <BambooPostListItem key={bamboo.allowedId} bamboo={bamboo} />
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
