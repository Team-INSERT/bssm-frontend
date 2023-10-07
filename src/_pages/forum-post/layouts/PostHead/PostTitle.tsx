import styled from "styled-components";
import { Column, Row } from "@/_components/Flex";
import color from "@/_styles/color";
import { flex, font } from "@/_styles";
import { Time } from "@/_assets/icons";
import { IPost } from "@/_interfaces";
import { ImageWithFallback } from "@/_components/atoms";
import { defaultProfile } from "@/_assets/images";
import useDate from "@/_hooks/useDate";
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
            <ResponsiveDate>
              {formatDate(post.createdAt, { summary: true })}
            </ResponsiveDate>
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

export default PostTitle;
