import Storage from "@/apis/storage";
import { Logo } from "@/assets/icons";
import { ROUTER, TOKEN } from "@/constants";
import useWindow from "@/hooks/useWindow";
import { color, flex, font } from "@/styles";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

const LoginModal = () => {
  const router = useRouter();
  const { isWindow } = useWindow();

  const handleLoginButtonClick = () => {
    if (isWindow) {
      Storage.setItem(TOKEN.PATH, window.location.pathname);
      router.push(process.env.NEXT_PUBLIC_OAUTH_URL || ROUTER.HOME);
    }
  };

  return (
    <Container>
      <Logo width={60} height={60} />
      <LoginButton onClick={handleLoginButtonClick} />
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 40px 30px;
  background-color: ${color.white};
  border-radius: 6px;
  ${flex.COLUMN_CENTER};
  gap: 5vh;
`;

const LoginButton = styled.button`
  width: fit-content;
  border-radius: 4px;
  padding: 8px 14px;
  background-color: ${color.primary_blue};
  color: ${color.white};
  ${font.btn3};

  &:after {
    content: "BSM 계정으로 로그인";
  }
`;

export default LoginModal;
