import styled from "styled-components";
import { Column, Row } from "@/components/Flex";
import { color, font } from "@/styles";
import { LikeIcon } from "@/assets/icons";
import { IPost } from "@/interfaces";
import { defaultProfile } from "@/assets/images";
import { ImageWithFallback } from "@/components/atoms";
import Link from "next/link";
import { ROUTER } from "@/constants";

interface IPostListItemProps {
  post: Omit<IPost, "content">;
}

const PostListItem = ({ post }: IPostListItemProps) => {
  return (
    <Container href={`${ROUTER.POST.LIST}/${post.id}`}>
      <PostNumber>{post.id}</PostNumber>
      <Column gap="4px">
        <PostName>{post.title}</PostName>
        <Row alignItems="center" gap="1vw">
          <Row gap="8px" alignItems="center">
            <ImageWithFallback
              src="/"
              alt="profile"
              width={22}
              height={22}
              fallbackSrc={defaultProfile}
              rounded
            />
            <PostWriterName>TEST</PostWriterName>
          </Row>
          <Separator />
          {/* <Row gap="8px">
            <PostView>{post.totalComments}</PostView>
            <Row alignItems="center" gap="3px">
              <LikeIcon />
              <PostLike>{post.totalLikes}</PostLike>
            </Row>
          </Row> */}
        </Row>
      </Column>
    </Container>
  );
};

const Container = styled(Link)`
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

const PostWriterName = styled.span`
  ${font.p3};
`;

const Separator = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${color.on_tertiary};
`;

export default PostListItem;
