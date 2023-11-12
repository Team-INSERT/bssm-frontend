import React from "react";
import styled from "styled-components";
import { Button } from "@/components/atoms";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "@/components/atoms/Loading";
import { color, flex, font } from "@/styles";
import BambooPostListItem from "./BambooPostListItem";
import { useBambooListQuery } from "../services/query.service";
import { useBamboo } from "../hooks";
import { BambooPostType } from "../interfaces";

const BambooPage = () => {
  const { isAdmin, handleManageButtonClick, handleCreateButtonClick } =
    useBamboo();
  const { bambooList, fetchNextPage, dataLength, hasMore } =
    useBambooListQuery();

  return (
    <Layout>
      <TitleText>🎋 학생 대나무숲</TitleText>
      <SubTitleText>
        말 못할 고민이나 사연들을 익명으로 편하게 이야기해봐요.
      </SubTitleText>
      <Button color={color.primary_blue} onClick={handleCreateButtonClick}>
        제보하기
      </Button>
      {isAdmin && (
        <Button color={color.primary_blue} onClick={handleManageButtonClick}>
          글 관리하기
        </Button>
      )}
      <InfiniteScroll
        dataLength={dataLength}
        next={fetchNextPage}
        hasMore={hasMore}
        loader={<Loading />}
      >
        {bambooList?.map((bamboos) => (
          <BambooPostListBox>
            {bamboos.content.map((bamboo: BambooPostType) => (
              <BambooPostListItem
                key={bamboo.allowedId}
                {...bamboo}
                isAdmin={isAdmin}
              />
            ))}
          </BambooPostListBox>
        ))}
      </InfiniteScroll>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN};
  gap: 14px;
`;

const TitleText = styled.h1`
  ${font.H2};
`;

const SubTitleText = styled.span`
  ${font.context};
  color: ${color.gray};
`;

const BambooPostListBox = styled.div`
  ${flex.COLUMN};
  gap: 14px;
`;

export default BambooPage;
