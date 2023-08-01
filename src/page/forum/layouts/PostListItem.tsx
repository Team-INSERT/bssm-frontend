import styled from "styled-components";
import { Column, Row } from "@/components/Flex";
import { color, font } from "@/styles";
import { LikeIcon } from "@/assets/icons";

const PostListItem = () => {
  return (
    <Container>
      <PostNumber>01</PostNumber>
      <Column>
        <PostName>게시판 타이틀입니다</PostName>
        <Row gap="8px">
          <PostView>83</PostView>
          <Row alignItems="center" gap="3px">
            <LikeIcon />
            <PostLike>30</PostLike>
          </Row>
        </Row>
      </Column>
    </Container>
  );
};

const Container = styled.article`
  width: 100%;
  height: 80px;
  background-color: ${color.white};
  display: flex;
  align-items: center;
  padding: 0px 32px;
  box-shadow: 0 0 10px 0 rgba(144, 144, 144, 0.1);
  border-radius: 4px;
  gap: 24px;
`;

const PostNumber = styled.span`
  ${font.H3};
  font-weight: 800;
`;

const PostName = styled.h1`
  ${font.H4};
`;

const PostView = styled.span`
  ${font.p3};
  color: ${color.gray};

  &:before {
    content: "조회수 ";
  }

  &:after {
    content: "회";
  }
`;

const PostLike = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

export default PostListItem;
