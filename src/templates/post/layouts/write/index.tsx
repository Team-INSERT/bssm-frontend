import styled from "styled-components";
import { theme, flex, font } from "@/styles";
import { Button } from "@/components/atoms";
import { Aside } from "@/components/common";
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

const PostWritePage = () => {
  const {
    postData,
    lostImageUrl,
    handleCategoryChangeClick,
    handleImageFileSelect,
    handlePostWriteButtonClick,
    handleInputPostDataChange,
  } = usePostWritable();
  return (
    <>
      <Layout>
        <TitleText>📕 글 쓰기</TitleText>
        <SubTitleText>어떤 생각을 하고 계신가요?</SubTitleText>
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
            color={theme.primary_blue}
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
  ${flex.COLUMN_FLEX};
  gap: 16px;
`;

const InputBox = styled.div`
  ${flex.COLUMN_FLEX};
  gap: 18px;
`;

const TitleText = styled.h1`
  ${font.H2};
`;

const SubTitleText = styled.p`
  ${font.context};
  color: ${theme.gray};
`;

export default PostWritePage;
