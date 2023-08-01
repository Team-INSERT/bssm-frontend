import styled from "styled-components";
import Link from "next/link";
import { color } from "@/styles";
import { Logo, Setting } from "@/assets/icons";
import useModal from "@/hooks/useModal";
import { SettingModal } from "@/components/common";
import Navigation from "./Navigation";

const Header = () => {
  const { openModal } = useModal();

  return (
    <Layout>
      <Container>
        <Link href="/">
          <Logo width={42} isPointable />
        </Link>
        <Navigation />
        <Setting onClick={() => openModal({ component: <SettingModal /> })} />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.white};
  border-bottom: 1px solid ${color.on_tertiary};
  z-index: 4;
`;

const Container = styled.header`
  width: 76%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 6%;
`;

export default Header;
