import React from "react";
import Image from "next/image";
import { loading } from "@/assets/images";
import styled from "styled-components";
import { color, flex, font } from "@/styles";
import { useOAuth } from "../hooks";

const OAuthPage = () => {
  useOAuth();

  return (
    <Container>
      <Image src={loading} alt="loading..." width={50} height={50} />
      <LoadingText>로그인 처리중...</LoadingText>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80vh;
  ${flex.COLUMN_CENTER};
  gap: 12px;
`;

const LoadingText = styled.span`
  ${font.H6};
  color: ${color.black};
`;

export default OAuthPage;
