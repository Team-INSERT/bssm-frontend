import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Logo } from "@/assets/icons";
import { ROUTER } from "@/constants";
import useWindow from "@/hooks/useWindow";
import { theme, flex, font } from "@/styles";

const LoginModal = () => {
  const router = useRouter();
  const { isWindow } = useWindow();

  const handleLoginButtonClick = () => {
    if (isWindow) {
      router.push(process.env.NEXT_PUBLIC_OAUTH_URL || ROUTER.HOME);
    }
  };

  return (
    <Container>
      <Logo width={60} height={60} />
      <LoginButton onClick={handleLoginButtonClick}>
        BSM 계정으로 로그인
      </LoginButton>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 40px 30px;
  background-color: ${theme.white};
  border-radius: 6px;
  ${flex.COLUMN_CENTER};
  gap: 5vh;
`;

const LoginButton = styled.button`
  width: fit-content;
  border-radius: 4px;
  padding: 8px 14px;
  background-color: ${theme.primary_blue};
  color: ${theme.white};
  ${font.btn3};
`;

export default LoginModal;
