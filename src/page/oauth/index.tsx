import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { loading } from "@/assets/images";
import styled from "styled-components";
import { color, font } from "@/styles";
import { Column } from "@/components/Flex";
import { useLoginMutation } from "./services/mutations.service";

const OAuthPage = () => {
  const authCode = useSearchParams().get("code");
  const loginMutation = useLoginMutation({ authCode });

  React.useEffect(() => {
    loginMutation.mutate();
  }, []);

  return (
    <Container>
      <Column justifyContent="center" alignItems="center" gap="12px">
        <Image src={loading} alt="loading..." width={100} height={100} />
        <LoadingText>로그인 처리중...</LoadingText>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.span`
  ${font.H4};
  color: ${color.blue};
`;

export default OAuthPage;
