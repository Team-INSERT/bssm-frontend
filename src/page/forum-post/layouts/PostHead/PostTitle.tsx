import styled from "styled-components";
import { Column, Row } from "@/components/Flex";
import color from "@/styles/color";
import { flex, font } from "@/styles";
import { Time } from "@/assets/icons";
import { IPost } from "@/interfaces";
import { ImageWithFallback } from "@/components/atoms";
import { defaultProfile } from "@/assets/images";
import useDate from "@/hooks/useDate";
import React from "react";

const PostTitle = ({ ...post }: IPost) => {
  const { formatDate } = useDate();

  return (
    <Column>
      <Title>{post.title}</Title>
      <ProfileBox>
        <Profile>
          <ImageWithFallback
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
          <Row gap="4px" alignItems="center">
            <Time width={12} height={12} />
            <Date>{formatDate(post.createdAt)}</Date>
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

const ProfileBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
`;

const Profile = styled.div`
  width: 42px;
  height: 42px;
  border: 2px solid ${color.on_tertiary};
  border-radius: 50%;
  ${flex.CENTER};
`;

const Author = styled.h2`
  ${font.context};
`;

const Date = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

export default PostTitle;
