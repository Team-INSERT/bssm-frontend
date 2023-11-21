import { defaultProfile } from "@/assets/images";
import { Column, Row } from "@/components/Flex";
import { Button, FallbackImage } from "@/components/atoms";
import { theme, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { useRecomment, useTextarea } from "@/templates/post/hooks";
import { CreateRecommentBoxProps } from "@/templates/post/types/@props";
import { useUser } from "@/@user/hooks";

const CreateRecommentBox = ({
  handleModeCancelClick,
  id,
}: CreateRecommentBoxProps) => {
  const {
    textareaRef,
    content: detail,
    setContent,
    row,
    handleResizeTextAreaOnInput,
    handleResizeTextareaKeyEnter,
  } = useTextarea("");
  const { user } = useUser();
  const { handleRecommentInputChange, handleCreateRecommentClick } =
    useRecomment(id);

  return (
    <Container>
      <FallbackImage
        src={user.profile_image}
        fallbackSrc={defaultProfile}
        alt="프로필"
        width={30}
        height={30}
        rounded
      />
      <Column width="100%" gap="10px">
        <RecommentTextArea
          ref={textareaRef}
          onChange={(e) => {
            handleRecommentInputChange(e);
            setContent(e.target.value);
          }}
          value={detail}
          onInput={handleResizeTextAreaOnInput}
          onKeyDown={handleResizeTextareaKeyEnter}
          row={row}
        />
        <Row gap="6px">
          <Button
            color={theme.primary_red}
            onClick={handleModeCancelClick}
            isSmall
          >
            취소
          </Button>
          <Button
            color={theme.primary_blue}
            onClick={() => {
              handleCreateRecommentClick();
              handleModeCancelClick();
            }}
            isSmall
          >
            작성
          </Button>
        </Row>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  gap: 12px;
`;

const RecommentTextArea = styled.textarea<{ row: number }>`
  border-bottom: 2px solid ${theme.on_tertiary};
  width: 100%;
  height: ${({ row }) => `${(row || 1) * 14}px`};
  padding-left: 8px;
  ${font.caption};
`;

export default CreateRecommentBox;
