import { defaultProfile } from "@/assets/images";
import { Column, Row } from "@/components/Flex";
import { ImageWithFallback } from "@/components/atoms";
import useTextarea from "@/hooks/useTextarea";
import useUser from "@/hooks/useUser";
import { useCreateRecommentMutation } from "@/templates/forum-post/services/mutation.service";
import { color, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

interface ICreateRecommentBoxProps {
  handleModeCancelClick: () => void;
  id: number;
}

const CreateRecommentBox = ({
  handleModeCancelClick,
  id,
}: ICreateRecommentBoxProps) => {
  const {
    content: detail,
    setContent,
    row,
    handleResizeTextAreaOnInput,
    handleResizeTextareaKeyEnter,
  } = useTextarea("");
  const { user } = useUser();
  const { mutate } = useCreateRecommentMutation();
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleCreateRecommentClick = () => {
    if (!detail.trim()) return toast.error("내용을 입력해주세요.");
    mutate({ id, detail });
    handleModeCancelClick();
  };

  React.useEffect(() => {
    if (textareaRef.current) textareaRef.current.focus();
  }, [textareaRef]);

  return (
    <Container>
      <ProfileImage>
        <ImageWithFallback
          src={user.profile_image}
          fallbackSrc={defaultProfile}
          alt="프로필"
          width={30}
          height={30}
          rounded
        />
      </ProfileImage>
      <Column width="100%" gap="10px">
        <RecommentTextArea
          ref={textareaRef}
          onChange={(e) => setContent(e.target.value)}
          value={detail}
          onInput={handleResizeTextAreaOnInput}
          onKeyDown={handleResizeTextareaKeyEnter}
          row={row}
        />
        <Row gap="6px">
          <CancelButton onClick={handleModeCancelClick} />
          <CreateButton onClick={handleCreateRecommentClick} />
        </Row>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  gap: 6px;
`;

const ProfileImage = styled.div`
  height: 100%;
`;

const RecommentTextArea = styled.textarea<{ row: number }>`
  border-bottom: 2px solid ${color.on_tertiary};
  width: 100%;
  height: ${({ row }) => `${(row || 1) * 14}px`};
  padding-left: 8px;
  ${font.caption};
`;

const CancelButton = styled.button`
  ${font.caption};
  border: none;
  border-radius: 999px;
  width: fit-content;
  padding: 4px 14px;
  margin-left: auto;

  &:after {
    content: "취소";
  }

  &:hover {
    background-color: ${color.on_tertiary};
  }
`;

const CreateButton = styled.button`
  ${font.caption};
  border: none;
  border-radius: 999px;
  width: fit-content;
  padding: 2px 14px;
  background-color: ${color.primary_blue};
  color: ${color.white};

  &:after {
    content: "작성";
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default CreateRecommentBox;
