import { color, flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { useBambooPendingListQuery } from "@/page/bamboo/services/query.service";
import BambooHeader from "./BambooHeader";
import BambooManagePostListItem from "./BambooManagePostListItem";

const BambooManageModal = () => {
  const { bamboos, isSuccess } = useBambooPendingListQuery();
  const isHasPost = !!bamboos?.length;

  return (
    <Container>
      <BambooHeader />
      <BambooBody>
        {isHasPost && isSuccess ? (
          <BambooPostListBox>
            {bamboos.map((bamboo) => (
              <BambooManagePostListItem key={bamboo.id} bamboo={bamboo} />
            ))}
          </BambooPostListBox>
        ) : (
          <BambooNoPostText />
        )}
      </BambooBody>
    </Container>
  );
};

const Container = styled.div`
  width: 60vw;
  height: 90vh;
  overflow-y: scroll;
  background-color: ${color.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const BambooBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  ${flex.COLUMN_CENTER};
`;

const BambooPostListBox = styled.div`
  width: 100%;
  height: 100%;
  ${flex.COLUMN};
  gap: 14px;
`;

const BambooNoPostText = styled.div`
  ${font.H4};

  &:after {
    content: "대기중인 글이 없습니다.";
  }
`;

export default BambooManageModal;
