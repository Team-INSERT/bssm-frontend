import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { color, flex } from "@/styles";
import { Logo, Setting } from "@/assets/icons";
import useModal from "@/hooks/useModal";
import { SettingModal } from "@/components/common";
import Navigation from "./Navigation";
import SubHeader from "./SubHeader";

const Header = () => {
  const { openModal } = useModal();
  const [isHover, setIsHover] = React.useState(false);
  const [delayHandler, setDelayHandeler] = React.useState<null | ReturnType<
    typeof setTimeout
  >>(null);

  const handleMouseEnter = () => {
    if (isHover) return setIsHover(true);
    setDelayHandeler(setTimeout(() => setIsHover(true), 400));
  };

  const handleMouseLeave = () => {
    if (!isHover && delayHandler) return clearTimeout(delayHandler);
    setIsHover(false);
  };

  return (
    <HeaderLayout
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Layout>
        <Container>
          <Link href="/">
            <Logo width={42} isPointable />
          </Link>
          <Navigation />
          <Setting onClick={() => openModal({ component: <SettingModal /> })} />
        </Container>
      </Layout>
      <SubHeader isHover={isHover} />
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  ${flex.COLUMN};
`;

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
  gap: 5%;
`;

export default Header;
