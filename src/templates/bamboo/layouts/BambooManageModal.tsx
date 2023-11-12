import { color, flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { useBambooPendingListQuery } from "@/templates/bamboo/services/query.service";
import useModal from "@/hooks/useModal";
import BambooPostListItem from "./BambooPostListItem";
import { ModalCloseIcon } from "../assets/icons";

const BambooManageModal = () => {
  const { closeModal } = useModal();
  const { bambooList, isSuccess } = useBambooPendingListQuery();

  return (
    <Container>
      <BambooHeader>
        <BambooTitle>🎋 대나무숲 글 관리</BambooTitle>
        <ModalCloseIcon onClick={closeModal} />
      </BambooHeader>
      <BambooBody>
        {isSuccess &&
          bambooList?.map((bamboo) => (
            <BambooPostListItem
              key={bamboo.id}
              allowedId={bamboo.id}
              {...bamboo}
              isAdmin
              isManageMode
            />
          ))}
        {!bambooList && (
          <BambooNoPostText>대기중인 글이 없습니다.</BambooNoPostText>
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

const BambooHeader = styled.header`
  width: 100%;
  padding: 10px 18px;
  ${flex.HORIZONTAL};
  justify-content: space-between;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
`;

const BambooTitle = styled.div`
  ${font.p2};
  font-weight: 500;
`;

const BambooBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  ${flex.COLUMN};
  gap: 14px;
`;

const BambooNoPostText = styled.div`
  ${font.H4};
`;

export default BambooManageModal;
