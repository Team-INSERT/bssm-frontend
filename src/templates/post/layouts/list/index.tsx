import styled from "styled-components";
import { color, flex, font } from "@/styles";
import { Button, Category } from "@/components/atoms";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "@/components/atoms/Loading";
import { Aside } from "@/components/common";
import { usePostListQuery } from "../../services/post/query.service";
import { usePost } from "../../hooks";
import { get카테고리명ByCategory } from "../../helpers";
import PostListItem from "./PostListItem";
import { categoryList } from "../../assets/data";

const PostPage = () => {
  const { currentCategory, handleWriteButtonClick, handleCheckCategoryClick } =
    usePost();
  const { postList, fetchNextPage, hasMore, dataLength } =
    usePostListQuery(currentCategory);

  return (
    <>
      <Layout>
        <TitleText>📒 학생 게시판</TitleText>
        <PostHeaderBox>
          <PostCategoryBox>
            {categoryList.map((category) => (
              <Category
                key={category}
                id={category}
                name="CATEGORY"
                onChange={handleCheckCategoryClick}
                checked={category === currentCategory}
                label={get카테고리명ByCategory(category)}
              />
            ))}
          </PostCategoryBox>
          <Button color={color.primary_blue} onClick={handleWriteButtonClick}>
            글쓰기
          </Button>
        </PostHeaderBox>
        <InfiniteScroll
          dataLength={dataLength}
          next={fetchNextPage}
          hasMore={hasMore}
          loader={<Loading />}
        >
          {postList?.map((posts) => (
            <PostListBox key={posts.currentPage}>
              {posts.entity.map((post) => (
                <PostListItem key={post.id} {...post} />
              ))}
            </PostListBox>
          ))}
        </InfiniteScroll>
      </Layout>
      <Aside />
    </>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN};
  gap: 12px;
`;

const TitleText = styled.span`
  ${font.H2};
`;

const PostHeaderBox = styled.div`
  ${flex.VERTICAL};
  justify-content: space-between;
`;

const PostCategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const PostListBox = styled.div`
  ${flex.COLUMN};
  gap: 8px;
`;

export default PostPage;
