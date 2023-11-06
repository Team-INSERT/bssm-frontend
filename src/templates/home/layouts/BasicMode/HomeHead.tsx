import { Arrow } from "@/assets/icons";
import { color, flex, font } from "@/styles";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface IHomeHeadProps {
  icon: React.JSX.Element;
  title: string;
  href?: string;
}

const HomeHead = ({ icon, title, href }: IHomeHeadProps) => {
  return (
    <Container>
      {icon}
      <StyledTitle>{title}</StyledTitle>
      {href && (
        <StyledLink href={href} target="_blank">
          <StyledLinkHref />
          <Arrow direction="right" width={8} />
        </StyledLink>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 4px 12px;
  ${flex.HORIZONTAL};
  gap: 8px;
  padding: 6px 8px;
  border-bottom: 1px solid ${color.on_tertiary};
`;

const StyledTitle = styled.span`
  ${font.p3};
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  ${flex.HORIZONTAL};
  margin-left: auto;
  gap: 4px;
`;

const StyledLinkHref = styled.span`
  ${font.p4};
  color: ${color.gray};

  &:after {
    content: "자세히 보기";
  }
`;

export default HomeHead;
