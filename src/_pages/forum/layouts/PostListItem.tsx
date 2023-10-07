import styled from "styled-components";
import { Column, Row } from "@/_components/Flex";
import { color, font } from "@/_styles";
import { IPost } from "@/_interfaces";
import { defaultProfile, emptyImage } from "@/_assets/images";
import { ImageWithFallback } from "@/_components/atoms";
import Link from "next/link";
import { POST, ROUTER } from "@/_constants";
import { CommentIcon, LikeIcon, Time } from "@/_assets/icons";
import useDate from "@/_hooks/useDate";

interface IPostListItemProps {
  post: Omit<IPost, "content">;
}

const PostListItem = ({ post }: IPostListItemProps) => {
  const { formatDate } = useDate();

  const is카테고리가분실물찾기라면 =
    post.category === POST.FOUND || post.category === POST.LOST;

  return (
    <Container href={`${ROUTER.POST.LIST}/${post.id}`}>
      {is카테고리가분실물찾기라면 && (
        <ImageWithFallback
          src={post.lostThingImage || ""}
          alt="분실물 이미지"
          fallbackSrc={emptyImage}
          width={50}
          height={50}
        />
      )}
      <Column gap="4px">
        <PostName>{post.title}</PostName>
        <Row alignItems="center" gap="1vw">
          <Row gap="8px" alignItems="center">
            <ImageWithFallback
              src={post.user.profileImage}
              alt="profile"
              width={18}
              height={18}
              fallbackSrc={defaultProfile}
              rounded
            />
            <PostWriterName>{post.user.nickName}</PostWriterName>
          </Row>
          <Separator />
          <Row gap="12px">
            <StyledReactBox>
              <CommentIcon width={12} />
              <PostComment>{post.commentCount}</PostComment>
            </StyledReactBox>
            <StyledReactBox>
              <LikeIcon width={12} />
              <PostLike>{post.likeCount}</PostLike>
            </StyledReactBox>
            <Row alignItems="center" gap="3px">
              <Time width={12} />
              <PostDate>
                {formatDate(post.createdAt, { summary: true })}
              </PostDate>
            </Row>
          </Row>
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
  padding: 0px 24px;
  box-shadow: 0 0 10px 0 rgba(144, 144, 144, 0.1);
  border-radius: 4px;
  gap: 24px;
`;

const PostName = styled.h1`
  ${font.H4};
`;

const PostComment = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

const PostLike = styled(PostComment)``;

const PostDate = styled(PostComment)``;

const PostWriterName = styled.span`
  ${font.p3};
`;

const Separator = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${color.on_tertiary};
`;

const StyledReactBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  @media screen and (max-width: 340px) {
    display: none;
  }
`;

export default PostListItem;
