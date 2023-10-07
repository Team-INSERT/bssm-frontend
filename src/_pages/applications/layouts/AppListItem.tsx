import Link from "next/link";
import styled from "styled-components";
import { Row, Column } from "@/_components/Flex";
import { color, font } from "@/_styles";
import { Arrow } from "@/_assets/icons";

interface IAppListItemProps {
  name: string;
  href: string;
  content: string;
}

const AppListItem = ({ name, href, content }: IAppListItemProps) => {
  return (
    <Container>
      <Column gap="4px">
        <Row>
          <AppName>{name}</AppName>
          <LinkBox>
            <LinkText href={href} target="_blank" />
            <Arrow direction="right" width={12} />
          </LinkBox>
        </Row>
        <AppDescription>{content}</AppDescription>
      </Column>
    </Container>
  );
};

const Container = styled.article`
  width: 100%;
  height: fit-content;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(144, 144, 144, 0.1);
  border-radius: 4px;
  gap: 4px;

  @media screen and (max-width: 1025px) {
    padding: 0 22px;
  }
`;

const AppName = styled.h1`
  ${font.H4};
`;

const AppDescription = styled.p`
  ${font.p2};
  white-space: pre-wrap;
  width: fit-content;
`;

const LinkBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
`;

const LinkText = styled(Link)`
  ${font.p3};
  color: ${color.gray};
  text-decoration: none;

  &:after {
    content: "서비스 보기";
  }
`;

export default AppListItem;
