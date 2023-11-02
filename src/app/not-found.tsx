"use client";

import { PageNotFound } from "@/assets/images";
import { Button } from "@/components/atoms";
import { ROUTER } from "@/constants";
import { color, flex } from "@/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

const NotFound = () => {
  const router = useRouter();
  return (
    <Container>
      <StyledImage width={999} height={999} src={PageNotFound} alt="404" />
      <Button
        color={color.primary_blue}
        onClick={() => router.push(ROUTER.HOME)}
      >
        홈으로 돌아가기
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70vh;
  ${flex.COLUMN_CENTER};
`;

const StyledImage = styled(Image)`
  width: 50%;
  height: fit-content;
`;

export default NotFound;
