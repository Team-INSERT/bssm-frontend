import styled from "styled-components";
import { Column, Row } from "@/components/Flex";
import { color, font } from "@/styles";
import { defaultProfile } from "@/assets/images";
import { ImageWithFallback } from "@/components/atoms";
import Link from "next/link";
import { ROUTER } from "@/constants";
import { PostListProperty } from "../../interfaces";
import PostListItemInformationBar from "./PostListItemInformationBar";
import { EmptyImage } from "../../assets/images";
import { CATEGORY } from "../../constants";

const PostListItem = ({
  category,
  id,
  lostThingImage,
  title,
  user,
  createdAt,
  commentCount,
  likeCount,
}: PostListProperty) => {
  const is카테고리가분실물찾기라면 =
    category === CATEGORY.FOUND || category === CATEGORY.LOST;

  return (
    <Layout href={`${ROUTER.POST.LIST}/${id}`}>
      {is카테고리가분실물찾기라면 && (
        <ImageWithFallback
          src={lostThingImage}
          alt="분실물 이미지"
          fallbackSrc={EmptyImage}
          width={50}
          height={50}
        />
      )}
      <Column gap="4px">
        <PostTitleText>{title}</PostTitleText>
        <Row alignItems="center" gap="12px">
          <ImageWithFallback
            src={user.profileImage}
            alt="profile"
            width={18}
            height={18}
            fallbackSrc={defaultProfile}
            rounded
          />
          <PostWriterNameText>{user.nickName}</PostWriterNameText>
          <Separator />
          <PostListItemInformationBar
            commentCount={commentCount}
            likeCount={likeCount}
            createdAt={createdAt}
          />
        </Row>
      </Column>
    </Layout>
  );
};

const Layout = styled(Link)`
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

const PostTitleText = styled.h1`
  ${font.H4};
`;

const PostWriterNameText = styled.span`
  ${font.p3};
`;

const Separator = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${color.on_tertiary};
`;

export default PostListItem;
