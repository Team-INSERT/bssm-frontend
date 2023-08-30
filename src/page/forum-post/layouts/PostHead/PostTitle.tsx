import styled from "styled-components";
import { Column, Row } from "@/components/Flex";
import color from "@/styles/color";
import { font } from "@/styles";
import Link from "next/link";
import { Time } from "@/assets/icons";
import { IPost } from "@/interfaces";
import { ImageWithFallback } from "@/components/atoms";
import { defaultProfile } from "@/assets/images";
import useDate from "@/hooks/useDate";

const PostTitle = ({ ...post }: IPost) => {
  const { getDate } = useDate();

  return (
    <Column>
      <Title>{post.title}</Title>
      <ProfileBox href="/" target="_blank">
        <Profile>
          <ImageWithFallback
            src="/"
            alt="profile"
            width={40}
            height={36}
            fallbackSrc={defaultProfile}
            rounded
          />
        </Profile>
        <Column justifyContent="center">
          <Author>{post.user.nickname}</Author>
          <Row gap="4px" alignItems="center">
            <Time width={12} height={12} />
            <Date>{getDate({ date: post.createdAt })}</Date>
          </Row>
        </Column>
      </ProfileBox>
    </Column>
  );
};

const Title = styled.h1`
  ${font.H3};
  padding-bottom: 10px;
`;

const ProfileBox = styled(Link)`
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
`;

const Profile = styled.div`
  border: 2px solid ${color.on_tertiary};
  border-radius: 50%;
`;

const Author = styled.h2`
  ${font.context};
`;

const Date = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

export default PostTitle;
