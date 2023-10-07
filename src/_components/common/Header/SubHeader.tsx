import { Logo, Setting } from "@/_assets/icons";
import { color } from "@/_styles";
import React from "react";
import styled, { keyframes } from "styled-components";
import SubNavigation from "./SubNavigation";

interface ISubHeaderProps {
  isHover: boolean;
}

const SubHeader = ({ isHover }: ISubHeaderProps) => {
  return (
    <Layout isHover={isHover}>
      <Container>
        <StyledDiv>
          <Logo width={42} />
        </StyledDiv>
        <SubNavigation />
        <StyledDiv>
          <Setting isPointable={false} />
        </StyledDiv>
      </Container>
    </Layout>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Layout = styled.div<{ isHover: boolean }>`
  position: absolute;
  top: 62px;
  width: 100%;
  height: fit-content;
  padding: 20px 0;
  display: ${({ isHover }) => (isHover ? "flex" : "none")};
  animation: ${({ isHover }) => (isHover ? fadeIn : "")} 0.1s ease-in;
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

const StyledDiv = styled.div`
  opacity: 0;
`;

export default SubHeader;
