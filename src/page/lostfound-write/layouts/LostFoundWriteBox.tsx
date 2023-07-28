import Column from "@/components/Flex/Column";
import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import InputBox from "./InputBox";

const LostFoundWriteBox = () => {
  return (
    <Layout>
      <Column gap="4px">
        <Title />
        <SubTitle />
      </Column>
      <InputBox />
    </Layout>
  );
};

const Layout = styled.div`
  width: 67%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h1`
  ${font.H2};

  &:after {
    content: "📦 분실물 찾기";
  }
`;

const SubTitle = styled.p`
  ${font.context};
  color: ${color.gray};

  &:after {
    content: "습득하거나 분실한 물건을 올려주세요!";
  }
`;

export default LostFoundWriteBox;
