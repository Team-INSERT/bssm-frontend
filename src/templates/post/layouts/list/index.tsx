import styled from "styled-components";
import { theme, flex, font } from "@/styles";
import { Button, Category } from "@/components/atoms";
import React from "react";
import { Aside } from "@/components/common";
import { useInfiniteScroll } from "@/hooks";
import { usePostListQuery } from "../../services/post/query.service";
import { usePost } from "../../hooks";
import { get카테고리명ByCategory } from "../../helpers";
import PostListItem from "./PostListItem";
import { categoryListData } from "../../assets/data";

const PostListPage = () => {
  const { currentCategory, handleWriteButtonClick, handleCheckCategoryClick } =
    usePost();
  const { postList, fetchNextPage } = usePostListQuery(currentCategory);
  useInfiniteScroll(fetchNextPage);

  return (
    <>
      <Layout>
        <TitleText>📒 학생 게시판</TitleText>
        <PostHeaderBox>
          <PostCategoryBox>
            {categoryListData.map((category) => (
              <Category
                key={category}
                id={category}
                name="CATEGORY"
                onChange={handleCheckCategoryClick}
                selected={category === currentCategory}
                label={get카테고리명ByCategory(category)}
              />
            ))}
          </PostCategoryBox>
          <Button color={theme.primary_blue} onClick={handleWriteButtonClick}>
            글쓰기
          </Button>
        </PostHeaderBox>
        {postList?.map((posts) => (
          <PostListBox key={posts.currentPage}>
            {posts.entity.map((post) => (
              <PostListItem key={post.id} {...post} />
            ))}
          </PostListBox>
        ))}
      </Layout>
      <Aside />
    </>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN_FLEX};
  gap: 12px;
`;

const TitleText = styled.span`
  ${font.H2};
`;

const PostHeaderBox = styled.div`
  ${flex.HORIZONTAL};
  justify-content: space-between;
`;

const PostCategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const PostListBox = styled.div`
  ${flex.COLUMN_FLEX};
  gap: 8px;
`;

export default PostListPage;
