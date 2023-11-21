import React from "react";
import styled from "styled-components";
import { Button } from "@/components/atoms";
import { theme, flex, font } from "@/styles";
import { Aside } from "@/components/common";
import { useUser } from "@/@user/hooks";
import { useInfiniteScroll } from "@/hooks";
import BambooPostListItem from "./BambooPostListItem";
import { useBambooListQuery } from "../services/query.service";
import { useBamboo } from "../hooks";
import { BambooPost } from "../types";

const BambooPage = () => {
  const { isAdmin } = useUser();
  const { handleOpenCreateModalClick, handleOpenManageModalClick } =
    useBamboo();
  const { bambooList, fetchNextPage } = useBambooListQuery();
  useInfiniteScroll(fetchNextPage);

  return (
    <>
      <Layout>
        <TitleText>🎋 학생 대나무숲</TitleText>
        <SubTitleText>
          말 못할 고민이나 사연들을 익명으로 편하게 이야기해봐요.
        </SubTitleText>
        <Button color={theme.primary_blue} onClick={handleOpenCreateModalClick}>
          제보하기
        </Button>
        {isAdmin && (
          <Button
            color={theme.primary_blue}
            onClick={handleOpenManageModalClick}
          >
            글 관리하기
          </Button>
        )}
        {bambooList?.map((bamboos) => (
          <BambooPostListBox>
            {bamboos.content.map((bamboo: BambooPost) => (
              <BambooPostListItem
                key={bamboo.allowedId}
                {...bamboo}
                isAdmin={isAdmin}
              />
            ))}
          </BambooPostListBox>
        ))}
      </Layout>
      <Aside />
    </>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN_FLEX};
  gap: 14px;
`;

const TitleText = styled.h1`
  ${font.H2};
`;

const SubTitleText = styled.span`
  ${font.context};
  color: ${theme.gray};
`;

const BambooPostListBox = styled.div`
  ${flex.COLUMN_FLEX};
  gap: 14px;
`;

export default BambooPage;
