import { ROUTER } from "@/constants";
import useDate from "@/hooks/useDate";
import { color, flex, font } from "@/styles";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface IHomePostListProps {
  posts: Array<{
    id: number;
    title: string;
    createdAt: string;
  }>;
}

const HomePostList = ({ posts }: IHomePostListProps) => {
  const { formatDate } = useDate();
  return (
    <Container>
      {posts?.map((post) => (
        <PostListItem href={`${ROUTER.POST.LIST}/${post.id}`} key={post.id}>
          <StyledTitle>{post.title}</StyledTitle>
          <StyledDate>
            {formatDate(post.createdAt, { summary: true })}
          </StyledDate>
        </PostListItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 8px 0;
  ${flex.COLUMN};
  gap: 8px;
`;

const PostListItem = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const StyledTitle = styled.span`
  ${font.p3};
  font-weight: 600;
`;

const StyledDate = styled.span`
  ${font.p4};
  margin-left: auto;
  color: ${color.gray};
`;

export default HomePostList;
