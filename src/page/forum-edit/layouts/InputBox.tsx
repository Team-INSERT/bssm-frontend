import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useApolloClient } from "@apollo/client";
import { CustomEditor, Input } from "@/components/atoms";
import { Column, Row } from "@/components/Flex";
import { emptyInputPost } from "@/assets/data";
import { color, font } from "@/styles";
import { POST, POST_INPUT, ROUTER } from "@/constants";
import { filterInputPost, getImageUrl } from "@/helpers";
import useDate from "@/hooks/useDate";
import DragDrop from "@/components/atoms/DragDrop";
import { useUpdatePostMutation } from "../services/mutation.service";
import { useUpdatePostQuery } from "../services/query.service";

interface IInputBoxProps {
  id: number;
}

const InputBox = ({ id }: IInputBoxProps) => {
  const router = useRouter();
  const { unformatDate } = useDate();
  const [mutate] = useUpdatePostMutation();
  const apolloClient = useApolloClient();
  const { post, loading } = useUpdatePostQuery({ id });
  const [inputPost, setInputPost] = React.useState(emptyInputPost);
  const [editorContent, setEditorContent] = React.useState("");
  const [image, setImage] = React.useState("");

  const handleImageFileSelected = async (file: File | undefined) => {
    const imageUrl = await getImageUrl(file);
    setImage(imageUrl);
  };

  React.useEffect(() => {
    if (post && !loading) {
      const {
        __typename: typename,
        createdAt,
        likeCount,
        commentCount,
        user,
        ...updatePost
      } = post;
      // 클린코드는 포기한지 오래다
      setInputPost(updatePost);
      setEditorContent(updatePost.content);
    }
  }, [post, loading]);

  const handleInputPostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setInputPost({
      ...inputPost,
      [name]: type === "date" ? unformatDate(value) : value,
    });
  };

  const handleUpdateButtonClick = async () => {
    if (editorContent) inputPost.content = editorContent;
    if (image) inputPost.lostThingImage = image;

    const updatePost = filterInputPost(inputPost);
    const { data } = await mutate({ variables: { data: updatePost } });
    apolloClient.cache.reset();
    toast.success("게시글이 수정되었습니다!");
    router.push(`${ROUTER.POST.LIST}/${data.update.id}`);
  };

  const handleEditorContentChange = (text: string | undefined) => {
    setEditorContent(text || "");
  };

  return (
    <Container>
      <Input
        label="글 제목"
        placeholder="글 제목을 입력해주세요"
        name={POST_INPUT.TITLE}
        onChange={handleInputPostChange}
        value={inputPost.title}
      />
      {inputPost.category === POST.PROJECT && (
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
                value={unformatDate(String(inputPost.startTime), {
                  summary: true,
                })}
                type="date"
              />
            </Column>
            <Column gap="4px">
              <StyledTitle>마감 예정 날짜</StyledTitle>
              <StyledInputDate
                name={POST_INPUT.END_TIME}
                onChange={handleInputPostChange}
                value={unformatDate(String(inputPost.endTime), {
                  summary: true,
                })}
                type="date"
              />
            </Column>
          </Row>
        </>
      )}
      {inputPost.category === POST.CODE_REVIEW && (
        <Input
          label="PR 링크"
          placeholder="리뷰받을 PR 링크를 입력해주세요."
          name={POST_INPUT.PR_URL}
          onChange={handleInputPostChange}
          value={inputPost.prUrl}
        />
      )}
      {(inputPost.category === POST.LOST ||
        inputPost.category === POST.FOUND) && (
        <>
          <Input
            label={inputPost.category === POST.LOST ? "분실 장소" : "습득 장소"}
            placeholder="물품을 분실 혹은 습득한 장소를 입력해주세요."
            name={POST_INPUT.PLACE}
            onChange={handleInputPostChange}
            value={inputPost.place}
          />
          <StyledTitle>물품의 이미지를 업로드해주세요.</StyledTitle>
          <DragDrop handler={handleImageFileSelected} previewImage={image} />
        </>
      )}
      {inputPost.category === POST.FOUND && (
        <Input
          label="보관 장소"
          placeholder="물품을 보관 중인 장소를 입력해주세요."
          name={POST_INPUT.KEEPING_PLACE}
          onChange={handleInputPostChange}
          value={inputPost.place}
        />
      )}
      <Column gap="6px">
        <StyledTitle>글 내용</StyledTitle>
        <CustomEditor
          value={editorContent}
          onChange={handleEditorContentChange}
        />
      </Column>
      <ControlBox>
        <CreateButton onClick={handleUpdateButtonClick} />
      </ControlBox>
    </Container>
  );
};

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
