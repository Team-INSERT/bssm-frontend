import Image from "next/image";
import styled from "styled-components";
import { loading } from "@/assets/images";
import { theme, flex, font } from "@/styles";
import { useOAuth } from "../hooks";

const OAuthPage = () => {
  useOAuth();

  return (
    <Layout>
      <Image src={loading} alt="로딩 이미지" width={50} height={50} />
      <LoadingText>로그인 처리중...</LoadingText>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 80vh;
  ${flex.COLUMN_CENTER};
  gap: 12px;
`;

const LoadingText = styled.span`
  ${font.H6};
  color: ${theme.black};
`;

export default OAuthPage;
