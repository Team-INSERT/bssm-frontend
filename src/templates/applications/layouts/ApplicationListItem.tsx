import Link from "next/link";
import styled from "styled-components";
import { Row } from "@/components/Flex";
import { theme, flex, font } from "@/styles";
import { ArrowIcon } from "@/assets/icons";
import { DIRECTION } from "@/constants";

interface ApplicationListItemProps {
  name: string;
  href: string;
  content: string;
}

const ApplicationListItem = ({
  name,
  href,
  content,
}: ApplicationListItemProps) => {
  return (
    <Container>
      <Row>
        <ApplicationNameText>{name}</ApplicationNameText>
        <LinkBox>
          <LinkText href={href} target="_blank">
            서비스 보기
          </LinkText>
          <ArrowIcon direction={DIRECTION.RIGHT} />
        </LinkBox>
      </Row>
      <AppDescriptionText>{content}</AppDescriptionText>
    </Container>
  );
};

const Container = styled.article`
  ${flex.COLUMN_HORIZONTAL};
  width: 100%;
  height: fit-content;
  gap: 4px;
  padding: 16px 32px;
  background-color: ${theme.white};
  box-shadow: 0 0 10px 0 rgba(144, 144, 144, 0.1);
  border-radius: 4px;

  @media screen and (max-width: 1025px) {
    padding: 0 22px;
  }
`;

const ApplicationNameText = styled.h1`
  ${font.H4};
`;

const AppDescriptionText = styled.p`
  ${font.p2};
  white-space: pre-wrap;
  width: fit-content;
`;

const LinkBox = styled.div`
  ${flex.HORIZONTAL};
  gap: 8px;
  margin-left: auto;
`;

const LinkText = styled(Link)`
  ${font.p3};
  color: ${theme.gray};
  text-decoration: none;
`;

export default ApplicationListItem;
