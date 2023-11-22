import React from "react";
import { Input } from "@/components/atoms";
import { PostCategoryInputBoxProps } from "../../types/@props";
import { POST_INPUT } from "../../constants";

const TitleInputBox = ({
  handleChange,
  postData,
}: PostCategoryInputBoxProps) => {
  return (
    <Input
      label="글 제목"
      placeholder="글 제목을 입력해주세요"
      name={POST_INPUT.TITLE}
      onChange={handleChange}
      value={postData.title}
    />
  );
};

export default TitleInputBox;
