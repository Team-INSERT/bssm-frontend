import styled from "styled-components";
import { Column, Row } from "@/components/Flex";
import { flex, font, theme } from "@/styles";
import { FallbackImage } from "@/components/atoms";
import { defaultProfile } from "@/assets/images";
import { CommentIcon, LikeIcon, TimeIcon } from "@/templates/post/assets/icons";
import { Post } from "@/templates/post/types";
import dayjs from "dayjs";
import DATE from "@/constants/date.constant";
import "dayjs/locale/ko";

const PostMainlyInformationBox = ({ ...post }: Post) => {
  return (
    <Column gap="10px">
      <TitleText>{post.title}</TitleText>
      <ProfileBox>
        <Profile>
          <FallbackImage
            src={post.user.profileImage}
            alt="profile"
            width={38}
            height={38}
            fallbackSrc={defaultProfile}
            rounded
          />
        </Profile>
        <Column justifyContent="center">
          <Author>{post.user.nickName}</Author>
          <Row gap="12px">
            <Row gap="4px" alignItems="center">
              <TimeIcon />
              <Date>
                {dayjs(post.createdAt).locale("ko").format(DATE.YYYYMMDDAHHMM)}
              </Date>
              <ResponsiveDate>
                {dayjs(post.createdAt).format(DATE.YYYYMMDD)}
              </ResponsiveDate>
            </Row>
            <Row alignItems="center" gap="4px">
              <LikeIcon />
              <PostText>{post.likeCount}</PostText>
            </Row>
            <Row alignItems="center" gap="4px">
              <CommentIcon width={12} height={12} />
              <PostText>{post.commentCount}</PostText>
            </Row>
          </Row>
        </Column>
      </ProfileBox>
    </Column>
  );
};

const TitleText = styled.h1`
  ${font.H3};
`;

const ProfileBox = styled.div`
  ${flex.HORIZONTAL};
  gap: 12px;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
`;

const Profile = styled.div`
  width: 42px;
  height: 42px;
  border: 2px solid ${theme.on_tertiary};
  border-radius: 50%;
  ${flex.CENTER};
`;

const Author = styled.h2`
  ${font.context};
`;

const Date = styled.span`
  ${font.p3};
  color: ${theme.gray};

  @media screen and (max-width: 541px) {
    display: none;
  }
`;

const ResponsiveDate = styled(Date)`
  display: none;
  @media screen and (max-width: 541px) {
    display: block;
  }
`;

const PostText = styled.span`
  ${font.p3};
  color: ${theme.gray};
`;

export default PostMainlyInformationBox;
