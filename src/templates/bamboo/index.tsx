import { flex } from "@/styles";
import { Aside } from "@/components/common";
import { Row } from "@/components/Flex";
import React from "react";
import styled from "styled-components";
import { HuggingFace, ShushingFace, ThinkingFace } from "@/assets/images";
import BambooButton from "./layouts/BambooButton";
import BambooPostList from "./layouts/BambooPostList";

const bambooButtonInfomations = [
  {
    icon: ShushingFace,
    title: "익명 제보하기",
    subtitle: "익명으로 글을 제보할 수 있어요!",
  },
  {
    icon: ThinkingFace,
    title: "제보를 삭제할 때",
    subtitle: "삭제를 원하는 글과 이유를 제보해주세요!",
  },
  {
    icon: HuggingFace,
    title: "제보가 승인되면",
    subtitle: "인스타그램에도 자동으로 글이 업로드돼요!",
  },
];

const BambooPage = () => {
  return (
    <Layout>
      <Container>
        <BambooPostList />
        <AsideButtonBox>
          <Row>
            <Aside />
          </Row>
          {bambooButtonInfomations.map((infomation) => (
            <BambooButton
              key={infomation.title}
              icon={infomation.icon}
              title={infomation.title}
              subtitle={infomation.subtitle}
            />
          ))}
        </AsideButtonBox>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 76%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const AsideButtonBox = styled.div`
  width: 21.4vw;
  ${flex.COLUMN};
  gap: 12px;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default BambooPage;
