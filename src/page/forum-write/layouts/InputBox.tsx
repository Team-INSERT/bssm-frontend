import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useApolloClient } from "@apollo/client";
import { Category, CustomEditor, Input } from "@/components/atoms";
import { Column, Row } from "@/components/Flex";
import { emptyCategories, emptyInputPost } from "@/assets/data";
import { color, font } from "@/styles";
import { POST, POST_INPUT, ROUTER } from "@/constants";
import {
  checkPostValid,
  getImageUrl,
  getWriteContentLabel,
  isAdmin,
} from "@/helpers";
import useUser from "@/hooks/useUser";
import useDate from "@/hooks/useDate";
import DragDrop from "@/components/atoms/DragDrop";
import { PostCategoryType } from "@/types";
import { useCreatePostMutation } from "../services/mutation.service";

const InputBox = () => {
  const [checked, setChecked] = React.useState<PostCategoryType>(POST.COMMON);
  const router = useRouter();
  const { unformatDate } = useDate();
  const [mutate] = useCreatePostMutation();
  const { user } = useUser();
  const apolloClient = useApolloClient();
  const [inputPost, setInputPost] = React.useState(emptyInputPost);
  const [editorContent, setEditorContent] = React.useState("");
  const [image, setImage] = React.useState("");

  const onCheckCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentChecked = e.target.id as PostCategoryType;
    setInputPost({ ...inputPost, category: currentChecked });
    setChecked(currentChecked);
  };

  const handleImageFileSelected = async (file: File | undefined) => {
    const imageUrl = await getImageUrl(file);
    setImage(imageUrl);
  };

  const handleInputPostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setInputPost({
      ...inputPost,
      [name]: type === "date" ? unformatDate(value) : value,
    });
  };

  const handleCreateButtonClick = async () => {
    if (editorContent) inputPost.content = editorContent;
    if (image) inputPost.lostThingImage = image;

    // true or toast.error를 반환하기 때문에 명시해주지 않으면 무조건 true가 반환될 것
    if (checkPostValid(inputPost) === true) {
      const { data } = await mutate({ variables: { data: inputPost } });

      apolloClient.cache.reset();
      toast.success("게시글이 등록되었습니다!");
      router.push(`${ROUTER.POST.LIST}/${data.create.id}`);
    }
  };

  const handleEditorContentChange = (text: string | undefined) => {
    setEditorContent(text || "");
  };

  return (
    <Container>
      <Column gap="6px">
        <CategoryLabel />
        <Row gap="6px">
          {emptyCategories.map((category) => {
            if (category.type === POST.NOTICE && !isAdmin(user.authority))
              return;
            return (
              <Category
                key={category.type}
                id={category.type}
                name="category"
                onChange={onCheckCategory}
                label={category.name}
                checked={category.type === checked}
              />
            );
          })}
        </Row>
      </Column>
      <Input
        label="글 제목"
        placeholder="글 제목을 입력해주세요"
        name={POST_INPUT.TITLE}
        onChange={handleInputPostChange}
        value={inputPost.title}
      />
      {checked === POST.PROJECT && (
        <>
          <Input
            label="프로젝트 분야"
            placeholder="프로젝트의 분야를 입력해주세요 ex) 웹, 앱"
            name={POST_INPUT.FIELD}
            onChange={handleInputPostChange}
            value={inputPost.field}
          />
          <Row gap="12px">
            <Column gap="4px">
              <StyledTitle>시작 날짜</StyledTitle>
              <StyledInputDate
                name={POST_INPUT.START_TIME}
                onChange={handleInputPostChange}
                type="date"
              />
            </Column>
            <Column gap="4px">
              <StyledTitle>마감 예정 날짜</StyledTitle>
              <StyledInputDate
                name={POST_INPUT.END_TIME}
                onChange={handleInputPostChange}
                type="date"
              />
            </Column>
          </Row>
        </>
      )}
      {checked === POST.CODE_REVIEW && (
        <Input
          label="PR 링크"
          placeholder="리뷰받을 PR 링크를 입력해주세요."
          name={POST_INPUT.PR_URL}
          onChange={handleInputPostChange}
          value={inputPost.prUrl}
        />
      )}
      {(checked === POST.LOST || checked === POST.FOUND) && (
        <>
          <Input
            label={checked === POST.LOST ? "분실 장소" : "습득 장소"}
            placeholder="물품을 분실 혹은 습득한 장소를 입력해주세요."
            name={POST_INPUT.PLACE}
            onChange={handleInputPostChange}
            value={inputPost.place}
          />
          <StyledTitle>물품의 이미지를 업로드해주세요.</StyledTitle>
          <DragDrop handler={handleImageFileSelected} previewImage={image} />
        </>
      )}
      {checked === POST.FOUND && (
        <Input
          label="보관 장소"
          placeholder="물품을 보관 중인 장소를 입력해주세요."
          name={POST_INPUT.KEEPING_PLACE}
          onChange={handleInputPostChange}
          value={inputPost.place}
        />
      )}
      <Column gap="6px">
        <StyledTitle>{getWriteContentLabel(checked)}</StyledTitle>
        <CustomEditor
          value={editorContent}
          onChange={handleEditorContentChange}
        />
      </Column>
      <ControlBox>
        <CreateButton onClick={handleCreateButtonClick} />
      </ControlBox>
    </Container>
  );
};

const CategoryLabel = styled.span`
  ${font.context};

  &:after {
    content: "카테고리";
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ControlBox = styled.div`
  display: flex;
  gap: 24px;
  margin-left: auto;
`;

const CreateButton = styled.button`
  width: 70px;
  height: 28px;
  border-radius: 4px;
  background-color: ${color.primary_blue};
  color: ${color.white};
  ${font.btn3};

  &:after {
    content: "작성";
  }
`;

const StyledInputDate = styled.input`
  padding: 10px 14px;
  background-color: ${color.white};
  ${font.caption};
`;

const StyledTitle = styled.h1`
  ${font.p3};
`;

export default InputBox;
