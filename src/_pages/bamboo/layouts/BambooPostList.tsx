import React from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { PuffLoader } from "react-spinners";
import { color, flex, font } from "@/_styles";
import useUser from "@/_hooks/useUser";
import { Row } from "@/_components/Flex";
import { IBambooPost } from "@/_interfaces";
import { BambooManageModal } from "@/_components/common";
import useModal from "@/_hooks/useModal";
import { isAdmin } from "@/_helpers";
import BambooCreateModal from "@/_components/common/Modal/BambooCreateModal";
import BambooPostListItem from "./BambooPostListItem";
import { useBambooListQuery } from "../services/query.service";

const BambooPostList = () => {
  const { user } = useUser();
  const { openModal } = useModal();
  const {
    data: bambooPages,
    fetchNextPage,
    hasNextPage,
  } = useBambooListQuery();

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
      <InfiniteScroll
        dataLength={bambooPages?.flatMap(({ data }) => data).length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage || false}
        loader={
          <LoadingBox>
            <PuffLoader size={40} />
          </LoadingBox>
        }
      >
        {bambooPages?.map((bamboos) => (
          <BambooPostListBox>
            {bamboos.content.map((bamboo: IBambooPost) => (
              <BambooPostListItem key={bamboo.allowedId} bamboo={bamboo} />
            ))}
          </BambooPostListBox>
        ))}
      </InfiniteScroll>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
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

const LoadingBox = styled.div`
  margin-top: 20px;
  width: 100%;
  ${flex.CENTER};
`;

export default BambooPostList;
