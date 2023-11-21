import styled from "styled-components";
import { color, flex } from "@/styles";
import { Button } from "@/components/atoms";
import { Aside } from "@/components/common";
import { usePostQuery } from "../../services/post/query.service";
import {
  TitleInputBox,
  ProjectInputBox,
  CodeReviewInputBox,
  LostFoundInputBox,
  FoundInputBox,
  ContentInputBox,
} from "../components";
import { CATEGORY } from "../../constants";
import { usePostWritable } from "../../hooks";
import PostCategoryBox from "./CategoryBox";
import WriteTitleBox from "./WriteTitleBox";
import { PostDetailParamsProps } from "../../interfaces";

const PostWritePage = ({ id }: PostDetailParamsProps) => {
  const { post } = usePostQuery(id);
  const {
    postData,
    lostImageUrl,
    handleCategoryChangeClick,
    handleImageFileSelect,
    handlePostWriteButtonClick,
    handleInputPostDataChange,
  } = usePostWritable(post);
  return (
    <>
      <Layout>
        <WriteTitleBox />
        <PostCategoryBox
          handleChangeCategory={handleCategoryChangeClick}
          currentCategory={postData.category}
        />
        <InputBox>
          <TitleInputBox
            handleChange={handleInputPostDataChange}
            postData={postData}
          />
          {postData.category === CATEGORY.PROJECT && (
            <ProjectInputBox
              handleChange={handleInputPostDataChange}
              postData={postData}
            />
          )}
          {postData.category === CATEGORY.CODE_REVIEW && (
            <CodeReviewInputBox
              handleChange={handleInputPostDataChange}
              postData={postData}
            />
          )}
          {(postData.category === CATEGORY.LOST ||
            postData.category === CATEGORY.FOUND) && (
            <LostFoundInputBox
              handleChange={handleInputPostDataChange}
              handleFileSelect={handleImageFileSelect}
              postData={postData}
              lostImageUrl={lostImageUrl}
            />
          )}
          {postData.category === CATEGORY.FOUND && (
            <FoundInputBox
              handleChange={handleInputPostDataChange}
              postData={postData}
            />
          )}
          <ContentInputBox
            handleChange={handleInputPostDataChange}
            postData={postData}
          />
          <Button
            align="RIGHT"
            color={color.primary_blue}
            onClick={handlePostWriteButtonClick}
          >
            작성
          </Button>
        </InputBox>
      </Layout>
      <Aside />
    </>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN};
  gap: 16px;
`;

const InputBox = styled.div`
  ${flex.COLUMN};
  gap: 18px;
`;

export default PostWritePage;
