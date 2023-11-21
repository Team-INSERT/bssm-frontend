import ArrowIcon from "@/assets/icons/ArrowIcon";
import { DIRECTION } from "@/constants";
import { theme, flex, font } from "@/styles";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface HomeHeadProps {
  icon: React.JSX.Element;
  title: string;
  href?: string;
}

const HomeHead = ({ icon, title, href }: HomeHeadProps) => {
  return (
    <Container>
      {icon}
      <StyledTitle>{title}</StyledTitle>
      {href && (
        <StyledLink href={href} target="_blank">
          <StyledLinkHref />
          <ArrowIcon direction={DIRECTION.RIGHT} width={8} />
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
  border-bottom: 1px solid ${theme.on_tertiary};
`;

const StyledTitle = styled.span`
  ${font.p3};
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  ${flex.VERTICAL};
  margin-left: auto;
  gap: 4px;
`;

const StyledLinkHref = styled.span`
  ${font.p4};
  color: ${theme.gray};

  &:after {
    content: "자세히 보기";
  }
`;

export default HomeHead;
