import styled from "styled-components";
import { color, flex, font } from "@/styles";
import { Button } from "@/components/atoms";
import { PostPageParams } from "../../interfaces";
import { usePostQuery } from "../../services/query.service";
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

const PostEditPage = ({ id }: PostPageParams) => {
  const { post } = usePostQuery(id);
  const {
    postData,
    lostImageUrl,
    handleImageFileSelect,
    handlePostEditButtonClick,
    handleInputPostDataChange,
  } = usePostWritable(post);
  return (
    <Layout>
      <TitleText>✍🏻 글 수정하기</TitleText>
      <SubTitleText>게시글의 어떤 내용을 수정하고 싶으신가요?</SubTitleText>
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
          onClick={handlePostEditButtonClick}
        >
          작성
        </Button>
      </InputBox>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN};
  gap: 16px;
`;

const TitleText = styled.h1`
  ${font.H2};
`;

const SubTitleText = styled.p`
  ${font.context};
  color: ${color.gray};
`;

const InputBox = styled.div`
  ${flex.COLUMN};
  gap: 18px;
`;

export default PostEditPage;
