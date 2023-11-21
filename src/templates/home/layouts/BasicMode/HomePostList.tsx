import dayjs from "dayjs";
import Link from "next/link";
import styled from "styled-components";
import { ROUTER } from "@/constants";
import { theme, flex, font } from "@/styles";

interface HomePostListProps {
  posts: Array<{
    id: number;
    title: string;
    createdAt: string;
  }>;
}

const HomePostList = ({ posts }: HomePostListProps) => {
  return (
    <Container>
      {posts?.map((post) => (
        <PostListItem href={`${ROUTER.POST.LIST}/${post.id}`} key={post.id}>
          <StyledTitle>{post.title}</StyledTitle>
          <StyledDate>
            {dayjs(post.createdAt).format("YYYY년 M월 D일")}
          </StyledDate>
        </PostListItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 8px 0;
  ${flex.COLUMN_FLEX};
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
  color: ${theme.gray};
`;

export default HomePostList;
