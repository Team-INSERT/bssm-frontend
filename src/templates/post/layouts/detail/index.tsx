import React from "react";
import styled from "styled-components";
import { color, flex } from "@/styles";
import { Row } from "@/components/Flex";
import { Button } from "@/components/atoms";
import { Aside } from "@/components/common";
import { usePostQuery } from "../../services/post/query.service";
import { usePost } from "../../hooks";
import { PostDetailParamsProps } from "../../interfaces";
import PostCategoryInformationBox from "./PostCategoryInformationBox";
import PostTitle from "./PostMainlyInformationBox";
import PostMainBox from "./PostMainBox";

const PostDetailPage = ({ id }: PostDetailParamsProps) => {
  const { post } = usePostQuery(id);
  const { postData } = usePost(post);
  const {
    isPostWriterSameAsUser,
    handleUpdateButtonClick,
    handleDeleteButtonClick,
  } = usePost(post);

  return (
    <>
      <Layout>
        <PostHeadBox>
          <Row gap="8px">
            <PostCategoryInformationBox postType={postData.category} />
            {isPostWriterSameAsUser && (
              <>
                <Button
                  align="RIGHT"
                  color={color.primary_blue}
                  onClick={handleUpdateButtonClick}
                >
                  수정
                </Button>
                <Button
                  color={color.primary_red}
                  onClick={handleDeleteButtonClick}
                >
                  삭제
                </Button>
              </>
            )}
          </Row>
          <PostTitle {...postData} />
        </PostHeadBox>
        <PostMainBox post={postData} />
      </Layout>
      <Aside />
    </>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN};
  border-radius: 4px;
  background-color: ${color.white};
  padding: 22px 32px;
`;

const PostHeadBox = styled.div`
  width: 100%;
  ${flex.COLUMN};
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${color.on_tertiary};
`;

export default PostDetailPage;
